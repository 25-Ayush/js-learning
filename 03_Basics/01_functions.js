function add(a,b){
  //console.log(  a+b);
  return a+b
}
add(3,5)
add(3,'d')
add(3,null)

const result = add(3,5)
//console.log(result);


function userMsg(userName ='ayush'){
if(!userName){
   console.log('enter a username');
   
}
  return `${userName} just logged in`
}

//console.log(userMsg('ayush'));

//console.log(userMsg()); //ayush just logged in
//console.log(userMsg('ram'));//ram just logged in


// ... rest operator is used for multiple parameters
function caculateCartPrice(val1, val2 , ...num){
  return num
}

//console.log(caculateCartPrice(10,20,30,40,50)); /// 30 40 50


// use objects in functions

const user = {
  name : 'vadapav',
  price : '15 Rs/-'
}

function getData(anyObject){
  console.log(`your item ${anyObject.name} costs ${anyObject.price}`);
  
}

//getData(user)
//getData({
//  name:'samosa',
//  price:'20 Rs/-'
//})

// arrays in function

const arr = [10,20,30,40]

function secValue(anyArray){
  return anyArray[2]
}

console.log(secValue(arr));
console.log(secValue([100,200,300,400,500]));

