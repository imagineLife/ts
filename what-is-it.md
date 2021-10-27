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