/*
  LET
*/
let age: number = 6;

/*
ts will break below & compiler output will read...
  src/index.ts:7:1 - error TS2322: Type 'string' is not assignable to type 'number'.
  7 age = 'water';

ts requires that variable value assignments must be the same "types".
numbers are immutable. 
arrays are.
*/

// age = 'water';





/*
  CONST
*/

const thisOne = 6; //sets the "type" to ... 6. not number