// Write a function named `sumUpTo(max)` that accepts a max number as an argument. The function should
// return the total sum of all whole numbers from 1 to the max, inclusive.
//
// For example, sumUpTo(4) should return 10 because 1 + 2 + 3 + 4 = 10.

const sumUpTo = function(num){
    let sum = 0;
    for(let i = 1; i <=num; i++){
       sum += i
    }

    return sum;
}


console.log(sumUpTo(4)); // 10
console.log(sumUpTo(5)); // 15
console.log(sumUpTo(2)); // 3