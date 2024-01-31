// Write a function `bleepVowels` that accepts a string as an argument. The function should return
// a new string where all vowels are replaced with `*`s. Vowels are the letters a, e, i, o, u.

const bleepVowels = function(str){
    let newStr = ''
    let vowels = 'aeiou'
    for(let i=0; i < str.length; i++){
        let char = str[i]
if(vowels.includes(char)){
   newStr += '*'
}else {
    newStr += char
}
    }

    return newStr;
}

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'