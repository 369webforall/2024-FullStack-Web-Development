// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.

const removeShortWords = function(str){
    let resultArr = [];
    let arr = str.split(' ');
    for(let i = 0; i < arr.length; i++){
        let word = arr[i] // knock
        if(word.length >= 4){
           resultArr.push(word) 
        }

    }
return resultArr.join(' ');
}
console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'