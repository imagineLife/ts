// THESE TWO examples pretty much do the same thing

interface Add{
  (x: number, y: number): number
}
const add: TwoNumCalc = (a,b) => a + b;


// alias for function type
type TwoNumCalc = (x: number, y: number) => number;
const sub:TwoNumCalc = (a,b) => a - b;


// a fn that doesn't return anything returns undefined
// this returns undefined
function printALog(arr: string[]){
  console.log(JSON.stringify(arr, null, ' '))
}

const resVal = printALog(['water','melon'])
// resVal is undefined




// returning undefined
function doInTwoSec(cb: () => undefined){
  setTimeout(cb, 2000)
}
doInTwoSec(() => console.log('this will work'))
// the fn will return undefined





// returning VOID!
function doAndReturnInThree(cb: () => void){
  setTimeout(cb, 3000)
}
let initArr = []
doAndReturnInThree(() => initArr.push(2))
//the fn will return a void, something that won't be used, something that should be ignored

