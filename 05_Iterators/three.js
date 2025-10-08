// for of = used over iterable objects like arrays and strings
// gives values

const arr =[ 1,2,3,4,5]

for (const i of arr) {
   // console.log(i);
    
}

const greeting = ' ayush phapale'

for (const val of greeting) {
    //console.log(val);
    
}

// maps

const map = new Map()

map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France') 
map.set('IN','India') //not allowed

//console.log(map);

for (const [key,value] of map) {
    // console.log(key ,' -> ',value);
    
}

const myObject = {
    'game1' : 'PUBG',
    'game2' : 'BGMI'
}

// for (const [key,value] of myObject) {
//     console.log(key ,' -> ',value);
// }

