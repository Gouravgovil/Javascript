// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["ramji", "hanumanji"] // array of strings

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6) // add element at the end of the array
myArr.push(7) 
myArr.pop() // remove element at the end of the array

myArr.unshift(9) // add element at the beginning of the array
myArr.shift() // remove element at the beginning of the array

console.log(myArr.includes(9)); // check if element is present in the array
console.log(myArr.indexOf(3)); // returns the index of the first occurrence of the specified value, or -1 if it is not

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr); 

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);