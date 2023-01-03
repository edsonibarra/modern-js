
let nameMale = 'Peter Parker';
console.log(nameMale);

nameMale = 'Ben Parker'; //Re-assigning the value
console.log(nameMale);

console.log(typeof nameMale); // string

let isMarvel = true;
console.log(typeof isMarvel); // boolean

let amount = 100;
console.log(typeof amount); // number

let reminder = 20.3;
console.log(typeof reminder); // number, It doesn't matter it has decimal point

let thisValueIsNull = null;
console.log(typeof thisValueIsNull); // object

let symbol1 = Symbol();
let symbol2 = Symbol();

console.log(symbol1); // Symbol()
console.log(symbol2); // Symbol()

console.log(typeof symbol1); // symbol
console.log(typeof symbol1); // symbol

console.log(symbol1 === symbol2); // false; each symbol is unique in JavaScript
