
var c =300 // scope

if(true){
    let a = 10  // block scope
    const b = 20
    var c = 30
}
//console.log(a); // error
//console.log(b); // error

//console.log(c); // 30

function one(){
    const username = 'ayush'

    function two(){
        const website = 'google'
        //console.log(username); // will ececute
        
    }
    //console.log(website); // will not execute
    two() 
}
one()


if(true){
    const username = 'thor'
    if (username==='thor') {
        const website = 'marvel'
        //console.log(username + website);
        
    }
} 
//console.log(username);


/******************** interesting **********************/

addOne(5) // executes 
function addOne(num) {
    return num +1
}
// addOne(5)


// variable function

addTwo(5) // error
const addTwo = function(num) {
    return num +2
}
// addTwo(5)