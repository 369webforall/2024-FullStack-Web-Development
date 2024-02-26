// Write a function `removeLastVowel` that accepts a string as argument. The function should return
// the string with its last vowel removed. Vowels are the letters a, e, i, o, u

const removeLastVowel = function(str){
    let newStr = "";
    let vowels = 'aeiou';
    for(let i = str.length - 1; i>=0; i--){
        let char = str[i] // 'e'
        if(vowels.includes(char)){
            let first = str.slice(0, i);
            let second = str.slice(i+1);
         
           return first+second
        }
        
    }
  
return str
}

console.log(removeLastVowel("speaker")); // 'speakr'
console.log(removeLastVowel("trading")); // 'tradng'
console.log(removeLastVowel("thunder")); // 'thundr'
console.log(removeLastVowel("myth")); // 'myth'