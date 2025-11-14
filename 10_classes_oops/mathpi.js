const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI')

//console.log(descriptor);


const hero = {
    name : 'hulk',
    ability : 'smash',
    isAvenger : 'true',
    isAvailable : function(){
        console.log('hulk is available');
        
    }
}

//console.log(Object.getOwnPropertyDescriptor(hero,'name'));


// Object.defineProperty(hero , 'name' , {
//     writable : false,
//     enumerable : false
// })

//console.log(Object.getOwnPropertyDescriptor(hero , 'name'));

for (let [key,value] of Object.entries(hero)) {
    if (typeof value != 'function') {
        console.log(`${key} : ${value}`);
    }
    
}