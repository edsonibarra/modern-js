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

const programmingLanguages = [
    'Python',
    'JavaScript',
    'C',
    'C++',
    'Rust',
    'Go',
    'Java',
    'C#',
    'Haskell',
    'Elixir',
    'PHP'
];

// An example on how to use forEach method
programmingLanguages.forEach( (item, idx, arr) => {
    console.log({item, idx, arr});
});

// Add an element at the beginning of the array
programmingLanguages.unshift('new first item');
console.log({newFirstPosition:programmingLanguages[0]}); // returns 'new first item'
