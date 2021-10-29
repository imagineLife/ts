/*
  Arrays && positional Storage
*/

// no err, no types....epic
const strArr = ['a','b'];

/*
  Tuples
*/

let tupleArr = [1986,'October',49];

/*
  Consider the use-case:
  - arrays are either defined-length (tuple) or random length of content
*/

// a DEFINED TUPLE TYPE
let definedTup: [number, string] = [123,'asdf'];
definedTup = ['qwer',234];
// above throws err


// NOTE: arr methods of push & pop wont throw err :/