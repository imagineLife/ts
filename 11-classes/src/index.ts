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

// ...this is a bit...VERBOSE!

/*
  Access modifier keywords review
  - public
    everyone can access the detail
  - protected
    only the instance itself and subclasses can access the detail
  - private
    only the instance itself can access the detail
*/ 