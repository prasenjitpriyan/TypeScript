"use strict";
// -- Array --------------------------------
let stringArray = ['one', 'two', 'three'];
let guitars = ['Start', 'Les Paul', 1987];
let mixedData = ['EVH', 1984, true];
stringArray[0] = 'Prasenjit';
stringArray.push('hey');
guitars[0] = 1984;
guitars.unshift('Prasenjit');
guitars = stringArray;
mixedData = guitars;
// -- Any type of Array
let test = [];
let bands = [];
bands.push('prasenjit');
// -- Tuple
let myTuple = ['Prasenjit', 36, true];
let mixed = ['Priyan', 38, false];
mixed = myTuple;
// -- myTuple = mixed
myTuple[1] = 37;
// -- Object ----------------------------------------------------
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};
const exampleObject = {
    name: 'Prasenjit',
    age: 36,
    isAvailable: true,
};
exampleObject.age = 40;
let evh = {
    name: 'Prasenjit',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Priyan',
    albums: [1984, 5150, 'OU812']
};
//evh = jp
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
// -- Enums ----------------------------------------------
//"Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
