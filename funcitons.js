
// Traditional functions
function sayHello(){
    console.log('Hello');
};

sayHello();

// Anonymous funcitons

const anotherFunction = function( name ){
    console.log('anotherFunction');
    console.log('hi ' + name);
};

anotherFunction();


// Traditional funcitons with arguments

function sayHi(name){
    console.log('Hello ' + name);
};

sayHi('John');
sayHi('Jane');


// Arrow functions

const sayHiTwo = (name) => {
    console.log('Arrow Function' + " " + name);
};


sayHiTwo('John');

// Return in funcitons

const sumTwoNums = (num1, num2) => {
    return num1 + num2;
};

let result = sumTwoNums(1, 9);
console.log(result);


// Another way to use one line funtion return

const hello = personName => 'hello ' + personName;

console.log(hello('John'));

const getRandomNumber = () => Math.random();
console.log(getRandomNumber());
