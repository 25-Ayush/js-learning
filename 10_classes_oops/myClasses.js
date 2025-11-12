class user{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const userone = new user('abc','abc@fb.com',123)

console.log(userone.encryptPassword());
console.log(userone.changeUserName())


// behind the scenes

function User(username , email , password ){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword=function(){
        return `${this.password}abc`
    }

 User.prototype.changeUserName=function(){
        return `${this.username.toUpperCase()}`
    }

const userThree = new User('pqr','pqr@fb.com',567)
const userFour = new User('xyz','xyz@fb.com', 789)

console.log(userThree.encryptPassword())
console.log(userFour.changeUserName())