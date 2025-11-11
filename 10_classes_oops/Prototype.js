// let myName = 'hulk   '
// let secName = 'thor   '

// console.log(myName.trim().length);

// console.log(myName.truelength());



 let myHeroes = ['hulk','thor']

 let heroPower = {
    hulk : 'smash',
    thor : 'hammer',

    getHulkPower : function (){
        console.log(`Power of hulk is ${this.hulk}`);
        
    }
 }

 // team function is used by all the objects 
Object.prototype.team = function(){
    console.log('you are an Avenger');
    
}

heroPower.team()


// myTeam function is used by all the arrays
Array.prototype.myTeam = function(){
    console.log('Avengers Assemble');
    
}
myHeroes.myTeam()

// function myTeam is not accessible to the 
// heropower object
//heroPower.myTeam()


// inheritance

const user = {
    name:'abc',
    email:'abc@google.com'
}

const Teacher = {
    makeVedio :true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fulltime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = user 

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherHero = 'Captain America'

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`Length is ${this.trim().length}`);
    
    
}

anotherHero.trueLength()
'Iron Man'.trueLength()
'Black Widow'.trueLength()