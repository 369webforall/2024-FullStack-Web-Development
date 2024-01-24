// function greet (){

// }

// snippet 0-1
let greet = function () {
  console.log('hey');
  console.log('programmers');
};

let whistle = function () {
  console.log('doot');
};

console.log('first');
console.log('second');
greet();
console.log('third');
console.log('fourth');
whistle();

// snippet 0-2
let howMany = function () {
  return 42;
};

console.log(howMany);
console.log(howMany()); // 42

const theAnswer = howMany(); // 42
console.log(theAnswer); // 42

let howMuch = function () {
  5;
};
console.log(howMuch());

// snippet 0-3
let average = function (num1, num2) {
  console.log('calculating...');
  return (num1 + num2) / 2;
};

console.log(average(5, 10));
console.log(average(20, 26));
console.log(average(50, 100) + 2);

let a = 21 + 3;
let b = 20;
let n = average(a, b); // 44
console.log(average(n, 18));
