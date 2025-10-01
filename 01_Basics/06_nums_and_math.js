const score = 100
//console.log(score);


const balance = new Number(200)
//console.log(balance);

//used to convert values into string
//console.log(balance.toString().length);

//used to fix the format decimal values
//console.log(balance.toFixed(2)); // 200.00


const otherNum = 123.4545
//used to fix the format digit values
//returns a string
//console.log(otherNum.toPrecision(3));

// adds commas as per indian countings
const money = 1000000000
//console.log(money.toLocaleString('en-IN'));


//*************MATHS***********************************

// console.log(Math.PI);
// console.log(Math.abs(-6));
// console.log(Math.round(4.6));
// console.log(Math.ceil(8.8));
// console.log(Math.floor(3.6));
// console.log(Math.min(1,2,3,4,5));
// console.log(Math.max(1,2,3,4,5));

console.log(Math.random()); // lies between 0-1

// random values for greater than 1
console.log(Math.floor(Math.random()*10)+1);

// random values in range

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min +1)) + min);
