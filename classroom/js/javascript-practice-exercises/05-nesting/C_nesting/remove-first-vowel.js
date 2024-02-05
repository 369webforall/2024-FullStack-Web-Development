// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.
const removeFirstVowel = function(str){
    let vowels = 'aeiou';
    for(let i =0; i < str.length; i++){
        let char = str[i] // v

        if(vowels.includes(char)){
            let first = str.slice(0, i)
            let second = str.slice(i+1)

            return first+second;
        }
    }
}
console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'