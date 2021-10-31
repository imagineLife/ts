// requires input (make,model,year)
class Vehicle{

  // type defs
  make: string
  model: string
  year: number
  
  constructor(
    make: string, 
    model: string,
    year: number
  ){
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let van = new Vehicle('Chrysler','MV', 2012);
