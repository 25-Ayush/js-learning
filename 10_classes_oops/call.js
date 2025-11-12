function setUser(username){
    this.username=username
}

function createUser(username , email , password){
    //n JavaScript, the .call() method is used to 
    // call (invoke) a function with a specific this
    //  value and arguments provided individually 
    // (not as an array).
    
    setUser.call(this,username)

    this.email = email
    this.password = password
}

const userOne = new createUser('abc','abc@fb.com',123)

console.log(userOne);