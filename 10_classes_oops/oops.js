const user = {
    username : 'ayush',
    loginCount : 8,
    signedIn : true,
    getDetails : function(){
        // console.log('got details from database');
        // console.log(`username : ${this.username}`);
        // console.log(this);
        
        
    }
}

// console.log(user);
// console.log(user.getDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`welcome ${this.username}`);
        
    }

   // return this  
}

const userOne = new User('thor',12,true)
const userTwo = new User('hulk',15,false)
console.log(userOne.constructor);

console.log(userOne);
console.log(userTwo);

