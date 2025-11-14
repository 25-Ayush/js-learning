class User {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`USERNAME IS : ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username , email , password){
        super(username)
        this.email=email 
        this.password=password
    }

    addCourse(){
        console.log(`new course is added by ${this.username}`);
        
    }
}

const user = new Teacher('mno','mno@fb.com',123)

user.addCourse()
user.logme()
const userOne = new User('abc')

userOne.logme()

console.log(userOne instanceof User);
