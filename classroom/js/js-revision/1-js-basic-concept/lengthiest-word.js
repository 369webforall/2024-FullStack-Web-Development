// Write a function `lengthiestWord` that accepts a sentence string as an argument. The function should
// return the longest word of the sentence. If there is a tie, return the word that appears later 
// in the sentence.
// 1-  convert the sentence to array

const lengthiestWord = function(str){
let arr = str.split(" ");
let result ='';
let resultLength = 0;
for(let i =0; i < arr.length; i++){
    let word = arr[i] // hungry
if(word.length >= resultLength){
    result = word
    resultLength = word.length;
}

}

return result;
}


console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'