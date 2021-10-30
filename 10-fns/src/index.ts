// interface
interface Add{
  (x: number, y: number): number
}

// alias for function type
type TwoNumCalc = (x: number, y: number) => number;

const add: TwoNumCalc = (a,b) => a + b;

const sub:TwoNumCalc = (a,b) => a - b;