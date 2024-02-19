// Write a function `funnyPhrase` that accepts a sentence string as an argument. The function should
// return the sentence where every other word has its vowels repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

const funnyPhrase = function(str){
    let arr = str.split(' ');
    let newArr = [];
    for(let i =0; i <arr.length; i++){
        let word = arr[i]
        if(i % 2 !== 0){
            let newWord = doubleVowel(word)
            newArr.push(newWord)
        }else {
            newArr.push(word)
        }
    }

    return newArr.join(" ");
}

const doubleVowel = function(str){
    let newStr = '';
    let vowels = 'aeiou';

    for(let i =0; i < str.length; i++){
        let char = str[i];
if(vowels.includes(char)){
    newStr += char + char
}
else {
    newStr += char
}
    }
    return newStr;
}

console.log(funnyPhrase("she dreamed of being a runner")); // 'she dreeaameed of beeiing a ruunneer'
console.log(funnyPhrase("park near the stoplight")); // 'park neeaar the stoopliight'
console.log(funnyPhrase("we need many gardeners")); // 'we neeeed many gaardeeneers'