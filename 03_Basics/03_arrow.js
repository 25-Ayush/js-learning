const user = {
    username : 'hulk',
    price : 200 ,

    welcomeMsg : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMsg()
// user.username='thor'
// user.welcomeMsg()

//console.log(this);

// function abcd(){
//     let name = 'rocky'
//     console.log(this.name); // undefined
    
// }

// abcd()


const abcd = () => {
    let name = 'rocky'
    //console.log(this.name); //undefined
}

abcd()


//implicit return
// const addTwo = (num1,num2) => num1 +num2

const addTwo = (num1,num2) =>({username : 'hulk'})
// console.log(addTwo(3,4));


