// Write a function `pickPrefix(strings, prefix)` that accepts an array of strings and a prefix string 
// as an argument. The function should return the an array of words that begin with the prefix.

const pickPrefix =  function(arr, str){
    let newArr = [];
    for(let i =0; i < arr.length; i++){
        let word = arr[i] // 'connect'
        if(word.includes(str)){
            newArr.push(word)
        }
    }  
    
    return newArr;
}


console.log(pickPrefix(['connect', 'company', 'concert', 'cram'], 'con'));
// ['connect', 'concert']

console.log(pickPrefix(['miner', 'mistake', 'misspeak', 'moose', 'mission'], 'mis'));
// [''mistake', 'misspeak', 'mission']