// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.

const alternatingCaps = function(str){
let newArr = []
let arr = str.split(' ');
for(let i =0; i <arr.length; i++){
    let word = arr[i]
    if( i % 2 === 0){
        newArr.push(word.toLowerCase())
    } else {
        newArr.push(word.toUpperCase())
    }
}

return newArr.join(" ");
}

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'