# More TS
- Declaration Merging
- Modules & CJS interop
- Type Queries
- Conditional Types
- Extract 
- Exclude
- Inference with conditional types
- Indexed Access Types
- Mapped Types


## Declaration Merging
Types && Values can be treated as single entities.  
```ts
interface Veggie {
  name: string
  mass: number
  color: string
}

// could be const, could be class
const Veggie = {
  color: 'brown',
  mass: 120,
  name: 'potato'
}

// HERE some ts magic 
export { Veggie };

// both interface && const get exported.... magic 
```


## Namespaces
Why namespaces?! we have generic types, we have interfaces....  
Namespaces are about clearing up types of "legacy" code. Don't use them too often.  


## Modules
Node uses commonJS as its default format.  
Up until 2015, there was no universal module syntax:
- CommonJS 
- AMD
- UMD

Since then, AMD & UMD have not really been adopted. 

## CommonJS Interop
This may be most useful for "library" creation, dealing with how code is accessible when "exporting" from a library file itself.  

## Importing non ts things
```ts
// a ts file
import someImage from './someImage.png';
/*
  WILL THROW ERR: 'cannot find module './someImage.png' or its corresponding type declaration'
  CAN be accomplished through a mod declaration where...
  - the png file is a GLOBAL js module with default export of type string
*/ 

// add a global type def file
// global.d.ts
decllare module "*.png"{
  const imgURL: string
  export default imgUrl
}

// THAT will create the needed "type" for any *.png file
```

## Importing Defaults from modules
some modules don't explicitly state that its content is the "default" export. Babel helps figure this out.  
TS needs specific config directions to "figure out" the default export.  
```ts

```

## Working with webpack
See [webpack's ts docs](https://webpack.js.org/guides/typescript/) for all the deets. heres some short-hand notes:
- need `ts-loader` to read the ts files
- need to setup & config some deets in a `tsconfig.json` at the root of the project


## Type Queries
Get types from values.  
Libraries might not expose type info.  
With a type "query", types can be derived from a val.

### Keyof
In Js keys can be strings, numbers, sometimes symbols....
```ts
// all props types
type DatePropNames = keyof Date

// only the 'string' types
// leveraging the intersection syntax
type DateStringPropsNames = DatePropNames & string

// only the 'symbol' props
// leveraging the intersection syntax
type DateSymbolPropNames = DatePropNames & symbol
```

### Typeof  
store the `typeof` value in a type def -
```ts
async function myProm(){
  const res = await Promise.all([
    fetch('http://example.com'),
    Promise.resolve('other mock promise res')
  ])

  // store the typeof in a type def
  type ApiResType = typeof res;
}
```

## Conditional Types
Ternaries exist in js.  
```js
const x  = 12
const res =  x >= 10 ? 'yes' : 'no'
```

Similar stuff in ts, using the 'extends' keyword
```ts
// not a lotta overlap between 2 classes
class Grill{
  startGas(){}
  stopGas(){}
}

class Oven{
  setTemp(){}
}

// new type from string!!
type Cooker<T> = T extends "grill" ? Grill : Oven;

// in use
let myFirstDevice: Cooker<"grill">;
let mySecondDevice: Cooker<"oven">;
```

more practice, noting which return true & false based on logical ts operators:

```ts
let a = 64 extends number;
let b = number extends 64;
let c = string[] extends any;
let d = string[] extends any[];
let e = never extends any;
let f = any extends any;
let g = Date extends {new (...args: any[]): any}
let h = (typeof Date) extends { new (...args: any[]): any };


// 
// answers below
// 

// a principle: the 'extends' keyword expects more specific type details from left-comparator-to-right
// maybe and "LEFT an extension of RIGHT"
/*
  a = true
    64 FITS in a number

  b = false
    31, in the first 'number' does NOT FIT 64

  c = true
    arr of strings FITS in any

  d = true
    arr of strings FITS in an arr of any

  e = true
    never FITS in any

  f = true
    any FITS in any

  g = false
    Date itself is not 'new'able

  h = true
    the typeof Date IS 'new'able
  
*/
```

## Core types of TypeScript
Some types are "built in".  

### Extract  

```ts
// below, a mixed OR type
type FavShapes = 
|'square'
|'circle'
|'hexagram'
| ['round','rounded','spherical']
| { sides: 'many', corners: 'many' };

// use EXTRACT to get FavShapes that are ONLY STRINGS
type NamedFavShapes = Extract<FavShapes, string>
// will return  |'square'|'circle'|'hexagram'
```

### Exclude  
