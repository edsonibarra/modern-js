/*
Create an empty array with length = 10
*/
const stuff = new Array(10);
console.log(stuff);

let videogames = ['elden ring', 'call of duty', 'fifa'];

console.log({videogames}); // print it like an object

console.log(videogames); // print only the array

let aLotOfThings = [
    true,
    false,
    999,
    18.99,
    'hello world',
    function (){},
    ()=>{},
    {a:1}, // literal object
    ['python', 'c', 'c++', 'java', 'javascript'],
];

console.log(aLotOfThings);
console.log(aLotOfThings[8][4]);


// Add an element at the end of the array using push method
// push method return the new length of the array
let newLen = aLotOfThings.push('hola mundo');
console.log({newLen});
