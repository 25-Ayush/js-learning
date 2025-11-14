 class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
 }

 const hulk = new User('hulk')
 //console.log(hulk);
 
 class Teacher extends User{
    constructor(emil){
        super(username)
        this.email = email
    }
 }

 const obj = new Teacher('abc','abc@gmail.com')
 console.log(obj.createId());
 