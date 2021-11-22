# React Utility Type
```ts
// keyof
// get all keys in a type def

type ObjType = {
  first: number
  second: number
}

type ObjKeysType = keyof ObjType;





// Inferring from type def
// get SINGLE key from obj
type FirstObjKeyType = ObjType["first"];





// unions
// one type of many options
type StringOrNum = string | number;
type OneOfString = 'water' | 'melon'
type OneOfContainer = 'box' | 'bag'




// grouped unions
type StringOrContainerType = OneOfString | OneOfContainer;




// Intersection
type Aa = 'asdf' | 'sdfg' | 'dfgh';
type Bb = 'sdfg' | 'dfgh' | 'fghj';


type AbMixType = Aa & Bb;
// returns 'sdfg' | 'dfgh' as both of those are in both types
```