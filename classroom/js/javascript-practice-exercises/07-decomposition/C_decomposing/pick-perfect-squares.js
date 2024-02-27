// Write a function `pickPerfectSquares` that accepts an array of numbers as an argument. The function 
// should return an array containing only the elements that are perfect squares. A perfect square
// is a number that can result from multiplying some number by itself.
//
// For example, 4 is a perfect square because 2 * 2 = 4
// For example, 81 is a perfect square because 9 * 9 = 81

const pickPerfectSquares = function(arr){
    let newArr = []
    for(let i =0; i<arr.length; i++){
        let num = arr[i] // 6
        for(let i =1; i < num; i++){
            if(i * i === num){
                newArr.push(num)
            }
           }
     
    }

    return newArr;
}


console.log(pickPerfectSquares([6, 4, 81, 21, 36])); // [4, 81, 36]
console.log(pickPerfectSquares([100, 24, 144])); // [100, 144]
console.log(pickPerfectSquares([30, 25])); // [25]