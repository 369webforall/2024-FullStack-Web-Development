// Write a function `characterCount` that accepts a string as an argument. The function should return
// an object containing the count of characters in the string.

const characterCount = function(str){
    let newObj = {};
    for(let i =0; i < str.length; i++){
        let char = str[i] // e
        if(newObj.hasOwnProperty(char)){
            newObj[char] = newObj[char] + 1
        } else {
            newObj[char] = 1
        }
    }
    return newObj;
}

console.log(characterCount("evening")); // { e: 2, v: 1, n: 2, i: 1 , g: 1 }
console.log(characterCount("mississippi")); // { m: 1, i: 4, s: 4, p: 2 }
console.log(characterCount("chili")); // { c: 1, h: 1, i: 2, l: 1 }