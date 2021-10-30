# Why Type Validation
## Explicit intent
Describing the 'types' that are regularly expected throughout a codebase _allows you, as the code author and consumer, to WRITE YOUR INTENT INTO THE CODE_. 
- when a function should only work on number params, type definitions will explicitly describe the expectations of the function to take numbers as args
## Move Errors 
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

type JSObj = {
  [k:string]: JSVal
}
type JSArr = JSVal[]
type JSVal = Prim | JSArr

function isJS(arg: JSVal){}
```