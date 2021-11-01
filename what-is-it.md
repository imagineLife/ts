# Why Type Validation
## Explicit intent
Describing the 'types' that are regularly expected throughout a codebase _allows you, as the code author and consumer, to WRITE YOUR INTENT INTO THE CODE_. 
- when a function should only work on number params, type definitions will explicitly describe the expectations of the function to take numbers as args

## What are types
Types are declarations of allowed values:
```js
let water: number = 10;
```
above, water can be any number.  

## Moves Errors from runtime to codetime
With proper type definitions && validations, code will "break" in development before releasing to production.  

## Editors have caught up
IDEs 'know' about ts. IDEs have handy tidbits for ts.

## TypeScript
- open-source
- syntactical superset
- add "type checking & validation" to js
- Parts
  - Language (the syntax)
  - Language Server
    - a piece of software
  - compiler

## TS Topics
- Compilation
- Vars
- Objects
- Arrays
- Union + Intersection Types
- Interfaces && Aliases
- Theories
  - categorizing this type system
  - set theory
- DIY approach
- Fns
- Classes
- Top & Bottom 
- Guards
- Nullish vals
- Generics
- DIY 
- Higher-order-functions

## Static, Dynamic, Nominal, Duck typing
TS is static.  
Java, C#, C++ are also static.  

Others are dynamic, which run type equivalence at run time.  
JS, Python, Ruby.  

Nominal, or structural type systems, are about NAMING the types.  
TS does this.  
Java is a nominally typed language.   

Duck Typing... 'If it looks like a duck...'.  


## Union Types
Can be though of as 'OR' for types.  
A Potato is both a type of VEGETABLE and type of STARCH.  


## Interfaces or Aliases
Consider when to use which:


## Example
```ts
type Prim = string | number | boolean | null

type JSArr = JSVal[]
type JSVal = Prim | JSArr

type JSObj = {
  [k:string]: JSVal
}

function isJS(arg: JSVal){}
```

## Top Types
"Top" types describe anything.  

### any
`any` is a top type.  
Any value in js can be assigned to the `any` type.  
`unknown` vals, though, do not work with `any`.  

## Bottom Types
These describe things that can hold no possible value.  
Why?! Well... to explicitly state when a var can be worth nothing:
- maybe in an `else` statement where all other `if` cases have been met
- maybe in a `switch` default


## Type Guards
TypeGuards are logical code that perform based on the value / type of a var
```js
function errOrVal(): |['error', Error]|['success', {obj:'dummy val'}]{
  // mock a random response
  const goodRes = Math.random() > .5
  if(goodRes){
    return ['success', {obj:'dummy val'}]
  }else{
    ['error', new Error('bad res')]
  }
}

const [res, val] = errOrVal();
console.log({res, val})

// leveraging type-guards via "Discriminated unions"

if(res === 'error'){
  // do err handling
  console.log('ERROR HANDLER HERE')
  return;
}

console.log('not an error')
```
- `Array.isArray(arrHere)` is a built-in type-guard
- `keyVal in ObjectHere` is a built-in type-guard

This can make the logic that "checks" for vals verbose though - lots of `if typeof potentialVar === "object" && typeof potentialVar.make === "string"... `

a custom `isCarLike` function
```ts
// returns a boolean
function isCarLike(testParam: any): valueToTest is CarLike{
  return (
    testParam &&
    typeof testParam === "object" &&
    "make" in testParam &&
    "model" in testParam &&
    "year" in testParam &&
    typeof testParam.make === 'string' &&
    typeof testParam.model === 'string' &&
    typeof testParam.year === 'number'
  )
}
```

## TS and nullish vals
null.  
undefined.  
void.  
### Null
Null indicates that null is present, and has no val.  

### Undefined
Undefined may mean... the val may never have been made, or have YET to be defined.  
### Void
this should be used for fn returns.  

## Generics
Creating types that are expressed by OTHER types.  
Allows for clean re-use of code.  
```ts
// Lets TRANSFORM an arr to an obj
const roomList = [
  {
    name: 'kitchen',
    windows: 2,
    doors: 2
  },
  {
    name: 'living',
    windows: 4,
    doors: 3
  },
  {
    name: 'bath',
    windows: 1,
    doors: 1 
  },
]

// obj of rooms 
const rooms = {
  // arbitrrary key name
  [k:string]: {
    doors: number
    windows: number
    sqFt: number
  }
}

// SOLUTION:
// TYPE DEF
interface RoomInfo{
  doors: number
  windows: number,
  sqFt: number,
  name: string
}


// return an arbitrary string from a fn param
function listToObj(arr: RoomInfo, idGenFn: (param: RoomInfo) => string){
  let resObj = {[k: string]: RoomInfo};

  arr.forEach(e => {
    const keyName = idGenFn(e)
    resObj[keyName] = e;
  })

  return resObj;
}

// do it
const getRoomName = (itm) => itm.name
console.log(listToObj(roomsList, getRoomName));
```

## Generics in action
```ts
/* 
  typescript will FIGURE OUT which types it should use
  the first <T> is the type-parameter list
  on a per-invocation-basis
*/ 
function wrapItemInArr<T>(itm:T): [T]{
  return [itm]
}

// this will "figure out the type" in these 3 examples

wrapItemInArr(3);
// TS figures out its a number

wrapItemInArr(new Date())
// TS figures out its a date

wrapItemInArr(new Regexp("/^A/"))
// TS figures out its a RegExp
```

## Generics Practice
Create Generic types for map, reduce + filter array method-like functions on objects
```ts
// generic "T" return type for the Object
// generic U for array 
function mapObj<T, U>(
  inputObj: Dict<T>,
  mapCB: (arg: T, k: str) => U
): Dict<U>{
  let res: Dict<T>: {};
  for(let k in inputObj){
    const objVal = inputObj[k];
    res[k] = mapCB(objVal);
  }
  return res;
}


// generic "T" return type
// input Dictionary with matching type
 
function filterObj<T>(
  inputObj: Dict<T>, 
  filterCB: (itm: T) => boolean
): Dict<T>{
  let res: Dict<T>: {};
  for(let k in inputObj){
    const objVal = inputObj[k];
    if(filterCB(objVal)){
      res[k] = objVal;
    }
  }
  return res;
}


// 
function reduceObj<T, V>(
  inputObj: Dict<T>,
  reducer: (curItm: V, itm: T) => V,
  initialVal: V
): V {
  let res = initialVal;

  for(let k in inputObj){
    const objVal = inputObj[k];
    res = reducer(res, objVal)
  }

  return res;
}

```