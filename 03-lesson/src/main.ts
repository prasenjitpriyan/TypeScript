// -- Array --------------------------------
let stringArray = ['one', 'two', 'three']
let guitars = ['Start', 'Les Paul', 1987]
let mixedData = ['EVH', 1984, true]

stringArray[0] = 'Prasenjit'
stringArray.push('hey')

guitars[0] = 1984
guitars.unshift('Prasenjit')

guitars = stringArray
mixedData = guitars

// -- Any type of Array
let test = []
let bands: string[] = []
bands.push('prasenjit')

// -- Tuple
let myTuple: [string, number, boolean] = ['Prasenjit', 36, true]
let mixed = ['Priyan', 38, false]

mixed = myTuple
// -- myTuple = mixed

myTuple[1] = 37


// -- Object ----------------------------------------------------
let myObject: object;
myObject = []
console.log(typeof myObject);

myObject = bands
myObject = {}

const exampleObject = {
  name: 'Prasenjit',
  age: 36,
  isAvailable: true,
}

exampleObject.age = 40

// type Guitarist = {
//   name: string;
//   active?: boolean,
//   albums: (string | number)[]
// }

//type can declare with interface

interface Guitarist {
  name: string;
  active?: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Prasenjit',
  active: false,
  albums: [1984, 5150, 'OU812']
}
let jp: Guitarist = {
  name: 'Priyan',
  albums: [1984, 5150, 'OU812']
}

//evh = jp

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(jp));

// -- Enums ----------------------------------------------
//"Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
