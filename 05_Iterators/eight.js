const myNums = [1,2,3]

const myTotal = myNums.reduce((acc,curr)=>{
    console.log(`acc = ${acc} and curr = ${curr}`);
    
    return acc + curr
},0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName : 'js course',
        price : 1000
    },
    {
        itemName : 'cpp course',
        price : 1500
    },{
        itemName : 'java course',
        price : 2000
    },{
        itemName : 'react course',
        price : 1700
    }
]

const pay = shoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(pay);
