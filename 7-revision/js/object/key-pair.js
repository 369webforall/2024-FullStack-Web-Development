// Write a function `keyPair(obj1, obj2, key)` that accepts two objects and a key string as arguments.
// The function should return an array containing the values of the given key in `obj1` and `obj2`.
// See the examples.

const keyPair = function(obj1, obj2, key){
    let newArr = [];
    newArr.push(obj1[key], obj2[key])

    return newArr;
}

let cat1 = { name: "jinkee", breed: "calico" };
let cat2 = { name: "garfield", breed: "red tabby" };
console.log(keyPair(cat1, cat2, "breed")); // [ 'calico', 'red tabby' ]
console.log(keyPair(cat1, cat2, "name")); // [ 'jinkee', 'garfield ]

let sport1 = { name: "volleyball", team: true };
let sport2 = { name: "golf", team: false };
console.log(keyPair(sport1, sport2, "team")); // [ true, false ]