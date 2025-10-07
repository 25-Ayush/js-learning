let email=''

if (email) {
   // console.log('user found');
    
} else {
   // console.log('user dosent exists');
    
}

// falsy

// false , 0 , -0 , BigInt 0n , '' , null , undefined , NaN

// truthy

// '0' , 'false' , ' ' , []  , {} , function(){}

if (email.length===0) {
   // console.log('array is empty');
    
}

const my0bj = {}

if (Object.keys(my0bj).length===0) {
    //console.log('object is empty');
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 
val1 = null ?? 10 ?? 15




console.log(val1);


// terniary operator

// condition ? true : false

const price = 100
price >= 80 ? console.log('greater than 80') : console.log('less than 80')

