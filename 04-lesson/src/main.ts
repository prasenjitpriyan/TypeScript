// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name: string;
  active?: boolean,
  albums: stringOrNumberArray
}

type UserId = stringOrNumber

// -- Literal Types --------------------------------

let myName: 'Prasenjit'

let userName: 'Prasenjit' | 'Priyan'
userName: 'Priyan'

// -- Functions --------------------------------

const add = (a: number, b: number): number => {
  return a + b
}

const logMsg = (message: any): void => {
  console.log(message);
}

logMsg('Hello!')
logMsg(add(2, 3))


type mathFunction = (a: number, b: number) => number
// interface mathFunction { (a: number, b: number): number }

let multiply: mathFunction = function (c, d) {
  return c * d
}

logMsg(multiply(2, 2))

// -- Optional Parameters --------------------------------
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c
  } else {
    return a + b
  }
}

// -- Default Parameters --------------------------------
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 3))

// -- Rest Parameters --------------------------------------

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3, 4))


// -- Never typed Parameters --------------------------------

const createError = (errMsg: string): never => {
  throw new Error(errMsg)
}

const infinite = () => {
  let i: number = 1
  while (true) {
    i++
    if (i > 100) break
  }
}

// -- Custom type guard --------------------------------

const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false
}

// -- Use of the never typed type guard ----------------

const numberOrString = (value: number | string): string => {
  if (isNumber(value)) return 'number'
  if (typeof value === 'string') return 'string'
  return createError('This should never happen!')
}