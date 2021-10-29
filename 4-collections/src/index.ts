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