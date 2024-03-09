"use strict";
// -- Literal Types --------------------------------
let myName;
let userName;
userName: 'Priyan';
// -- Functions --------------------------------
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
// interface mathFunction { (a: number, b: number): number }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// -- Optional Parameters --------------------------------
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
// -- Default Parameters --------------------------------
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// -- Rest Parameters --------------------------------------
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3, 4));
// -- Never typed Parameters --------------------------------
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// -- Custom type guard --------------------------------
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// -- Use of the never typed type guard ----------------
const numberOrString = (value) => {
    if (isNumber(value))
        return 'number';
    if (typeof value === 'string')
        return 'string';
    return createError('This should never happen!');
};
