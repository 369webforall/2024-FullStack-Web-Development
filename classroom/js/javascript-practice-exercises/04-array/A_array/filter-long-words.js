// Write a function `filterLongWords` that accepts an array of strings as an argument. The function
// should return a new array containing only the strings that are less than 5 characters long.

const filterLongWords = function(arr){
    let newArr = [];
    for(let i = 0; i <arr.length; i++){
        let word = arr[i]
        if(word.length < 5){
            newArr.push(word)
        }
    }

    return newArr;
}


console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']