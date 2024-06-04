// Write a function `wordCount(sentence, targetWords)` that accepts a sentence string and an array of
// `targetWords`. The function should return a count of the number of words of the sentence that are
// in `targetWords`.
const wordCount = function(str, arr){
    let count = 0;
    let newArr = str.split(" ")
    for(let i = 0; i < arr.length; i++){
        let word = arr[i]
        if(newArr.includes(word)){
            count += 1
        }
    }

    return count;
}

console.log(wordCount("open the window please", ["please", "open", "sorry"])); // 2
console.log(wordCount("drive to the cinema", ["the", "driver"])); // 1
console.log(wordCount("can I have that can", ["can", "I"])); // 3