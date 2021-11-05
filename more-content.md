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