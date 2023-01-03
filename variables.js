let age = 10;
let personName = 'John Doe';
const country = 'Hong Kong'; 

console.log('---- Customer Information ----')
console.log(`Age: ${age}`);
console.log(`Person Name: ${personName}`);
console.log(`From: ${country}`);


let greeting = 'hola mundo';

console.log(`before funciton ${greeting}`);

const sayHello = () => {
    let greeting = 'hello world';
    console.log(`inside funciton ${greeting}`);
};

console.log('executing function');

sayHello();

console.log(`after funciton ${greeting}`);
