// Write a function `isPrime` that accepts a number as an argument. The function should return a
// boolean indicating whether or not the given number is prime. A prime number is a number that is
// only divisible by 1 and itself. The smallest prime number is 1.
//
// For example, 11 is a prime because it is only divisible by 1 and 11.
// For example, 8 is not a prime because it is divisible by 1, 2, 4, and 8

const isPrime = function(num){
    if(num < 2){
        return false;
    }
    
    for(let i =2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }

    return true;
}

console.log(isPrime(11)); // true / /2,3/4/5/6/7/8/9/10
console.log(isPrime(8)); // false // 2, 3,
console.log(isPrime(7)); // true
console.log(isPrime(21)); // false
console.log(isPrime(2)); // true
console.log(isPrime(15)); // false
console.log(isPrime(1)); // false