//singleton
//Object.create

// object literals

const mySym = Symbol('key1') // declare before using it in obj

const myObj = {
    name : 'Ayush',
    location : 'pune',
    email :'ayushphapale25@gmail.com',
    age:22,
    isLoggedIn : true,
    loggedInDays : ['monday','wednesday'],
    [mySym] : 'myKey1' // syntax for symbol
}



//less preferred
//console.log(myObj.name);

// more preferred
//console.log(myObj['email']); //js treats keys as string

// syntax for symbol
//console.log(myObj[mySym]);

//change the value in object
myObj.name ='lord-Ayush'
//console.log(myObj);

// freeze dont allow any further updation
//Object.freeze(myObj)
myObj.age = 40
//console.log(myObj);


myObj.greetings = function(){
    console.log('hello');
    
}
console.log(myObj.greetings());

myObj.greetingsTwo = function(){
    console.log(`hello my name is ${this.name}`);
    
}
console.log(myObj.greetingsTwo());

console.log(myObj);

