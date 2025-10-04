// singleton object
// constructor method
//let obj = new Object()

//non-singleton object
const obj = {}

obj.id = '123abc'
obj.name = 'naruto'
obj.isLoggedIn = true

//console.log(obj);

//nested object
let myObj ={
    email : 'abc@123.com',
    newObj : {
        fullName : {
            firstName :'ayush',
            lastName :'phapale'
        }
    }
}

// accessing nested objects
// console.log(myObj.newObj);
// console.log(myObj.newObj.fullName);
// console.log(myObj.newObj.fullName.firstName);


 const obj1 = {  1:'a' , 2:'b' }
 const obj2 = {  3:'c' , 4:'d' }

// wrong method
 //let obj3 = {obj1 , obj2} 

 //Object.assign( target , source )
 // used {} to store resltant values i.e target
 // if not used then it will store it in first object
//let obj3 = Object.assign({},obj1,obj2)

//best method
const obj3 = {...obj1,...obj2}

//console.log(obj3);
 
//array of objects
const users = [
    {
        name:'ayush'
    },
    {
        name:'thor'
    },
    {
        name:'hulk'
    }
]

users[1].name


// console.log(obj);

// //important

// console.log(Object.keys(obj)); // returns array
// console.log(Object.values(obj));

// // returns an array where an element is a key:value pair
// console.log(Object.entries(obj));

// checks if property is present or not
// console.log(obj.hasOwnProperty('name'));
// console.log(obj.hasOwnProperty('age'));


// object destructuring

const course ={
    courseName : 'JavaScript',
    coursePrice : 2000 ,
    courseInstructor : 'jethalal'
}

//course.courseInstructor

const {courseInstructor : instructor} = course

console.log(instructor);

// JSON 
// {
//     'name' : 'ayush',
//     'courseName' : 'javascript',
//     'price' : 'free'
// }


 [
    {},
    {},
    {},
 ]