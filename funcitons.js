
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
