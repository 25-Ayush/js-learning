// Pritmitive       

// 7 types : String , Number , Boolean , NULL , undefined,
// Symbol , BigInt


// JavaScript is a dynamically typed language.
//Because in JavaScript, the type of a variable is 
// determined at runtime (not at compile time).

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId);

const bigNumber = 33472398472094234n;


// Reference (Non Primitive)

// Arrays , Objects , Functions

const heroes = ['shaktiman','naagraj','doga'];


let obj = {
    name :'hitesh',
    age : 22
}

const myFunction=function(){
    console.log('hello world');
    
}

//console.log(typeof bigNumber);


//*****************************************************

// Stack(Primitive), Heap(Non-Primitive)


let myName = 'Iron Man';
let anotherName = myName;
anotherName = 'thor';

console.log(myName);
console.log(anotherName);

let userOne ={
    name:'hulk',
    email:'hulk@abc.com'
}

let userTwo= userOne;

userTwo.name='antman';

console.log(userOne);
console.log(userTwo);

