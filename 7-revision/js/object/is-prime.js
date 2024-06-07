// Write a function `isPrime` that accepts a number as an argument. The function should return a
// boolean indicating whether or not the given number is prime. A prime number is a number that is
// only divisible by 1 and itself. The smallest prime number is 1.
//
// For example, 11 is a prime because it is only divisible by 1 and 11.
// For example, 8 is not a prime because it is divisible by 1, 2, 4, and 8

const isPrime = function(num){

    if(num < 2){
        return false
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true;
}


console.log(isPrime(11)); // true
console.log(isPrime(8)); // false
console.log(isPrime(7)); // true
console.log(isPrime(21)); // false
console.log(isPrime(2)); // true
console.log(isPrime(15)); // false
console.log(isPrime(1)); // false
console.log(isPrime(3))


const pickPrimes = function(arr){
let newArr = [];
for(let i =0; i < arr.length; i++){
    let n = arr[i]
    let ans = isPrime(n) // false

    if(ans){
        newArr.push(n)
    }
}

return newArr;
}



console.log(pickPrimes([12, 3, 7, 18, 11])); // [3, 7, 11]
console.log(pickPrimes([17, 23, 9, 42])); // [17, 23]
console.log(pickPrimes([4, 2048, 100, 55])); // []