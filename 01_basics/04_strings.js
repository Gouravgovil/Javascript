const name = "gourav"
const age = 22

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('gourav-hc-com')

console.log(gameName[3]);  // returns the third  character of the string
console.log(gameName.__proto__); // returns the prototype of the String object


console.log(gameName.length);  // find the length of the string
console.log(gameName.toUpperCase());  // convert to uppercase
console.log(gameName.charAt(2));  // get character at index 2
console.log(gameName.indexOf('t')); // find the index of the first occurrence of the specified value

const newString = gameName.substring(0, 4) // returns the substring from index 0 to 4
console.log(newString);

const anotherString = gameName.slice(-8, 4) // returns the characters from index 4 to 8
console.log(anotherString);

const newStringOne = "   gourav    " // trim the string to remove leading and trailing spaces
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gourav.com/gourav%25govil"

console.log(url.replace('%25', '-')) // replace %25 with - in the url

console.log(url.includes('jethalal')) // check if the string contains the specified value

console.log(gameName.split('-')); // split the string into an array of substrings