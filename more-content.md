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
// const Veggie = {
//   color: 'brown',
//   mass: 120,
//   name: 'potato'
// }

// HERE some ts magic 
export { Veggie };

// both interface && const get exported.... magic 
```