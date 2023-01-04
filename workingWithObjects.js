/*Details about literal objects*/

// Delete property of an object

let character = {
    charName: 'Iron Man',
    age: 50,
};

console.log(character);

delete character.age;

console.log(character);

// Convert an object to an array
let fruits = {
    apple: 4,
    orange: 1,
    watermelon: 10,
}

let fruitsArray = Object.entries(fruits);

console.log(fruitsArray);

// Get only the object properties
const propertiesFruits = Object.getOwnPropertyNames(fruits);

console.log(propertiesFruits);
