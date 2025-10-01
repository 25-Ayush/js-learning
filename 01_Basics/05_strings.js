const name = 'Thor '
const repoCount = 2

// console.log(name + repoCount + ' value');

//console.log(`hello my name is ${name} my repo count is ${repoCount}`);


const gameName = new String('Hulk-smash')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
//console.log(gameName.indexOf('k'));

const subStr = gameName.substring(2,6);
//console.log(subStr);

const anotherString = gameName.slice(-5,7); // negative value allowed
//console.log(anotherString); 


const newHero = '  Captain  America  ' // removes the spaces from start and end
//console.log(newHero.trim());
//console.log(newHero);

const url = 'https://ayush.com/ayush%20phapale'
console.log(url.replace('%20','-'));

console.log(url.includes('phapale'));

console.log(gameName.split('-')); // splits based on the basis of seperator










