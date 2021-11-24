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





// exclude
type LessTwoType = Exclude<1|2|3|4, 2>
// returns 1 | 3 | 4





// extract, "opposite" of exclude
type OnlyNumberType = Extract<1|"2"|3|"4", number>
// return 1 | 3





// Pick, takes 1 type, pick KEYS from an OBJ 
type BigObjType = {
  asdf: 'qwer'
  sauce: 'saucy'
  water: 'melon'
  bingo: 'bongo'
}

type PickedBigType = Pick<BigObjType, "sauce" } "water">
// returns { sauce: 'saucy', water: 'melon' }


//  Omit, take all but named vals
typeOmittedObjType = Omit<BigObjType, "water" | "bingo">
// returns {asdf: "qwer", sauce: "saucy"}





// React Props
// React.HTMLProps
// HTMLXXXElement props
const MyInput = (props: <Props & React.HTMLProps<HTMLInputElement>>) => {
  // <input .../>
}





// ComponentProps
type MyComponentPropsType = React.ComponentProps<typeof MyComponent>





// Defining Table Row Headres + values from a static type set
type ItemOfInterestType = {
  height: number;
  weight: number;
  age: number;
  hairColor: string;
  gender: string;
}

type TableRowProps = {
  heading: Capitalize<keyof CharacterType>;
  value: CharacterType[keyof CharacterType];
}





// Template Literal, string interpolation + coercion
// MUST be a combination of 2 strings
type AdjectiveType = 'Jumpy' | 'Squirly' | 'Gooey'
type CreatureType = 'Spider' | 'Bug' | 'Crawler';
type CreepyCrawlyType = `${AdjectiveType}-${CreatureType}`

type VertAlignType = 'top' | 'center' | 'bottom';
type HzAlignType = 'left' | 'center' | 'right';
//  want to allow any combination of vert-horz
// want to allow JUST 'center'
// want to force type err on center-center
type VertHzAlignType = Exclude<`${VertAlignType}-${HzAlignType}` | 'center', 'center-center'>
```