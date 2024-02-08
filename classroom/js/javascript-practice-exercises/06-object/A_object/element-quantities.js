// Create a function `elementQuantities` that accepts an object as an argument. The object contains
// elements as keys and quantities as values. The function should return an array containing the elements
// appearing with the correct quantities. See the examples.

// function statement

// let obj = {} 


const elementQuantities = function(obj){
let arr = [];
for(let key in obj){
let val = obj[key] 
for(let i = 1; i <= val; i++){
   arr.push(key) 
}
}

return arr;
}


let quantities1 = { cat: 3, bird: 1, dog: 2 };
console.log(elementQuantities(quantities1)); // ['cat', 'cat', 'cat', 'bird, 'dog', 'dog']

let quantities2 = { blue: 3, brown: 1 };
console.log(elementQuantities(quantities2)); // ['blue', 'blue', 'blue', 'brown']