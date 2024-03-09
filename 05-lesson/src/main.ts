type One = string;
type Two = string | number;
type Three = 'hello'

// -- Convert to more or less specific types ---
let a: One = 'hello';
let b = a as Two // less specific types
let c = a as Three // more specific types

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') return a + b
  return '' + a + b
}
let myVal: string = addOrConcat(2, 2, 'concat') as string

// -- Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number


// -- The DOM --------------------------------
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('#img');

img.src
myImg.src