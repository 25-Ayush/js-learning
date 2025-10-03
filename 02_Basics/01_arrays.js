const arr = [ 1,2,3,4]
const strArr = ['hulk','thor','antman','spiderman']

const myArr = new Array(10,20,30,40,50)

//console.log(arr[0]);

const mySecArr = new Array(1,2,3,4,5)

// mySecArr.push(6)
// mySecArr.push(7)
// mySecArr.pop()

//mySecArr.unshift(-1) // push from left
//mySecArr.shift() // pop from left

//console.log(mySecArr.includes(8));
//console.log(mySecArr.indexOf(10));

// const newArr = mySecArr.join() //Adds all the elements of an array into a string
// console.log(newArr);
// console.log(typeof newArr); // string



//console.log(mySecArr);

console.log();

console.log('A ',mySecArr);
const myarr1 = mySecArr.slice(1,3)
console.log(myarr1);


console.log('B ',mySecArr);
const myArr2 = mySecArr.splice(1,3) 
console.log('C ',mySecArr); //modifies original array

console.log(myArr2);


