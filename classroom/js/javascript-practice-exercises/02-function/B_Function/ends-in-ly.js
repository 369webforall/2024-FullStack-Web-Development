// Write a function `endsInLy` that accepts a string as an argument and returns a boolean indicating
// whether or not the string ends in the substring 'ly'.

const endsInLy = function (str) {
  const lasTwoChar = str[str.length - 2] + str[str.length - 1];
  if (lasTwoChar === 'ly') {
    return true;
  } else {
    return false;
  }
};

console.log(endsInLy('pretty')); // false
console.log(endsInLy('instant')); // false
console.log(endsInLy('analytic')); // false
console.log(endsInLy('timidly')); // true
console.log(endsInLy('fly')); // true
console.log(endsInLy('gallantly')); // true
