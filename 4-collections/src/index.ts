/*
  Objects
*/
let car: {
  make: string
  model: string
  year: number
} = {
  make: 'Honda',
  model: 'Accord',
  year: 2017
}

/*
  optional keys
*/
let carWithOptions: {
  make: string
  model: string
  year: number,
  features?: string
} = {
  make: 'Honda',
  model: 'Accord',
  year: 2017,
  features: 'yes'
}


/*
  leveraging a type-guard
*/

let carWithOptCharging: {
  make: string
  model: string
  year: number,
  chargeVoltage?: number
} = {
  make: 'tesla',
  model: 'something',
  year: 1867
};

function stringRes(obj: {
    make: string
    model: string
    year: number,
    chargeVoltage?: number
  }): string {
    let thisChargeVal = obj.chargeVoltage;
    let middleManStr: string = `${obj.make} ${obj.model} ${obj.year}`;
    // type-guarding HERE
    if(typeof thisChargeVal !== 'undefined'){
      middleManStr += ` ${thisChargeVal}`
    }

    return middleManStr;
}





/*
  Optional Properties
*/
let optionalPropObj: {
  a: number,
  b: string,
  c?: string
} = {
  a: 1,
  b: 'asdf'
}

function needsAllFields(obj: {
  a: number, 
  b: string,
  c: string | undefined
}): boolean{
  return true;
}

needsAllFields({a: 123, b: 'asdf'})
/*
  above fn returns err
  Property 'c' is missing in type 
    '{ a: number; b: string; }' 
  but required in type 
    '{ a: number; b: string; c: string; }'.

  declared undefined vals are not the same as 
    optional keys
*/ 




/*
  Extraneoous prop checking
*/
function onlyExplicitKeys(obj: {a:number, b: string}): boolean{
  return true
}

onlyExplicitKeys({a:1234,b:'asdf',c:'asdfsdf'})
/*
  returns err
  Object literal may only specify known properties, 
  and 'c' does not exist in type '{ a: number; b: string; }'.
*/