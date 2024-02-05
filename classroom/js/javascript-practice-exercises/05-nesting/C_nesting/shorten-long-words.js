// Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
// should return the same sentence where words longer than 4 characters have their vowels removed.

const shortenLongWords = function(str){
    let newArr = [];
    let arr = str.split(' ')
   for(let i = 0; i <arr.length; i++){
    let word = arr[i]
    if(word.length > 4) {
        let newWord = removeVowels(word);
        newArr.push(newWord);
    }else {
        newArr.push(word);
    }
   }
   return newArr.join(' ');
}

const removeVowels = function(str){
    let newStr = '';
    let vowels = 'aeiou';
    for(let i =0; i <str.length; i++){
        let char = str[i]
        if(!vowels.includes(char)){
            newStr += char;
        }
    }

    return newStr;
}

console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); // 'bllrna, you must have seen her'