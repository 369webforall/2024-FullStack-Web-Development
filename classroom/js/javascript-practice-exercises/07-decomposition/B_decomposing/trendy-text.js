// Write a function `trendyText` that accepts a sentence string as an argument. The function should
// return the sentence where the last vowel of every word is removed.
const trendyText = function(str){
    let arr = str.split(" ");
    let newArr = [];
    for(let i =0; i <arr.length; i++){
        let word = arr[i]
        let newWord = removeLastVowel(word)
        newArr.push(newWord)
    }

    return newArr.join(' ')
}


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

console.log(trendyText("the concert will be epic")); // 'th concrt wll be epc'
console.log(trendyText("breakfast food is wonderful")); // 'breakfst fod s wonderfl'
console.log(trendyText("the weather will improve hopefully")); // 'th weathr wll improv hopeflly'