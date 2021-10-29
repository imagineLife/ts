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




/*
  set un-used var types
*/

const RANDOM_TIME = Math.round(Math.random() * 500) + 500;
let startTime = new Date();
// set this var to be of type date, even though it is not initialized with val
let endTime: Date;

setTimeout(() => {
  endTime = new Date()
}, RANDOM_TIME);