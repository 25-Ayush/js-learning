// Immediately Invoked Function Expressions

//IIFE (Immediately Invoked Function Expression) is 
// a function that runs immediately after it is defined.
//It’s defined and invoked at the same time

//IIFE is mainly used to:

//Avoid polluting the global scope (keep variables private).

//Execute code immediately without calling it later.

//Create a separate scope for variables (especially before ES6 let and const).


// syntax : (function)()

(function add(){
    // named iife
    console.log('iife');
    
})(); // use semi colon to end the execution

( () =>{
    console.log('iife 2');
    
})();


( (name) =>{
    console.log(`iife 2 ${name}`);
    
})('shantabai');

