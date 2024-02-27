// Write a function `lalaLanguage` that accepts a sentence string as an argument. The function should
// return a new sentence where words longer that 3 characters are modified. Modified words should have
// each vowel followed by 'l' and the same vowel repeated again. See the examples.

const lalaLanguage = function(str){
    let arr = str.split(" ") 
    let resultArr = [];
    for(let i =0; i < arr.length; i++){
        let word = arr[i]

        if(word.length > 3){
            let newWord = changeVowel(word)
            resultArr.push(newWord)
        } else {
            resultArr.push(word)
        }

  
    }

    return resultArr.join(" ");
}

// 'this'
function changeVowel(word){
let vowels = "aeiou"
let changeWord = ""
for(let i=0; i < word.length; i++){
    let char = word[i]; // t
    if(vowels.includes(char)){
changeWord += char+'l'+char  
    }else{
        changeWord += char
    }
}

return changeWord;
}
console.log(lalaLanguage('this is pretty strange')); // 'thilis is preletty stralangele'
console.log(lalaLanguage('can you speak our language')); // 'can you spelealak our lalangulualagele'