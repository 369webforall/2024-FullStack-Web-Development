// Write a function `lengthiestWord` that accepts a sentence string as an argument. The function should
// return the longest word of the sentence. If there is a tie, return the word that appears later 
// in the sentence.

const lengthiestWord = function(str){
    let result = ''
    let arr = str.split(' ');
    for(let i =0; i <arr.length; i++){
        let word = arr[i] 
        if(word.length >= result.length){
            result = word;
        }
    }

    return result;
}
console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'