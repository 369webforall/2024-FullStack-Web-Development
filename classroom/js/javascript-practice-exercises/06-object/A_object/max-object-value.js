// Write a function `maxObjectValue` that accepts an object as an argument. Write a function that
// returns an array containing the key, value pair for the largest value within the object. You can
// assume that all values are numbers and there are no ties.

const maxObjectValue = function(obj){
    let k = ''
    let v = 0;
    for(let key in obj){
        if(v < obj[key] ) {
            v= obj[key]
            k = key
        }
    }

    return [k, v]
}


console.log(maxObjectValue({ a: 5, b: 2, c: 6, d: 7, e: 4 })); // ['d', 7]
console.log(maxObjectValue({ lychee: 11, rambutan: 13, papaya: 9 })); // ['rambutan', 13]