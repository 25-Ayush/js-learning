const marvel_heros = ['thor','hulk','antman']
const dc_heros = ['superman','batman','flash']

//marvel_heros.push(dc_heros) 
// treats dc heros as 4th element in marvel heros
//console.log(marvel_heros);

//const heros = marvel_heros.concat(dc_heros)
//console.log(heros);

// ... spread operator
const all_heros = [...marvel_heros,...dc_heros]
//console.log(all_heros);

let hardArr =[1,2,[3,4],5,[6,[7,7]],9]

let easyArr = hardArr.flat(Infinity)
//console.log(easyArr);

// checks if it is array or not 
console.log(Array.isArray('Ayush'));

// convert values into array
console.log(Array.from('Ayush'));

// interesting
console.log(Array.from({name : 'ayush'}));


let a=10
let b=20
let c=30

// creates arrays from values
console.log(Array.of(a,b,c));
