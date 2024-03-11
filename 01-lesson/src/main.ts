let username = "Prasenjit";
console.log(username);

let a: number = 12
let b: number = 6
let c: number = 2

console.log(a / b);
console.log(c * b)

let myName: string = "Prasenjit";
let meaningOfLife: number;
let isLoading: boolean;

// -- any types
let album: any;

// -- Union types
let albums: string | number | bigint | boolean;

// -- Regular expressions
let re: RegExp = /\w+/g

myName = "Priyan";
meaningOfLife = 42;
isLoading = true;
album = 1987

const sum = (a: number, b: number) => {
  return a + b;
}

const circle = (diameter: number) => {
  return diameter * Math.PI
}
console.log(circle(7.5));
