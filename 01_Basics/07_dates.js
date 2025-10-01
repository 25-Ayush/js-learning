let myDate = new Date();

// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString()); // gives only date

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString('en-IN'));

// console.log(myDate.toLocaleString()); // gives only date

// console.log(typeof(myDate)); // object


let createMyDate = new Date(2025,9,1) // month starts from 0
//console.log(createMyDate.toDateString());


let mySecDate = new Date(2025,9,1,8,33)
//console.log(mySecDate.toLocaleString());


let myThirdDate = new Date("10-1-2025")
//console.log(myThirdDate.toLocaleString());


let myTime = Date.now()
//console.log(myTime);
//console.log(mySecDate.getTime());
//console.log(Math.floor(Date.now()/1000)); for seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default' , {
    weekday : "long",
    
})

