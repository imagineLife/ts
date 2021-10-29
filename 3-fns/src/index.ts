function addNoReturnType(a: number, b: number) {
  return 'water'
}
addNoReturnType(1,2)
/*
  ABOVE
  No return type, no error
*/


function addReturnNumBad(a: number,b: number): number{
  return `${a + b}`
}
addReturnNumBad(3,2)
/*
  ABOVE
  declared return type, throws err
    error TS2322: Type 'string' is not assignable to type 'number'.
    12   return `${a + b}`
*/

function addReturnNum(a: number,b: number): number{
  return a + b
}
addReturnNum(3,2)