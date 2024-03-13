// Write a function `lengthiestWord` that accepts a sentence string as an argument. The function should
// return the longest word of the sentence. If there is a tie, return the word that appears later 
// in the sentence.
//1. convert string into array
//2. loop through array
//3.  compare with last word, 
//4. replace if the word larger

const lengthiestWord = function(str){
    let array = str.split(" ");

let lastWord = ""

    for(let i =0; i < array.length; i++){
        let word = array[i] // I
        if(lastWord.length <= word.length){
            lastWord = word
        }
    }

    return lastWord;
}


console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'