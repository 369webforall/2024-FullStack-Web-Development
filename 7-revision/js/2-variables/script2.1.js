
"use strict"

// What are primitive data types in js

// Primitive data types are the most basic data types that are not objects and have no methods. They are immutable, meaning their values cannot be changed once they are created. 

// string,number, boolean, null, undefined

// type of operators 

// 1. string concatination +

let a;

a = 10

a += 5; 

console.log(a)

// ++, --

// Math, logical, comperission, assignment operators

// type checking (typeof)

console.log(typeof 42); // "number"
console.log(typeof 'hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof { name: 'Alice' }); // "object"
console.log(typeof function() {}); // "function"
console.log(typeof null); // "object" (this is considered a bug in JavaScript)

// Array.isArray()

console.log(Array.isArray([])) // true
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray('hello')); // false
console.log(Array.isArray({})); // false

// Checking for null

let value = null;
console.log(value === null); // true


//  Checking for NaN

console.log(isNaN(NaN)); // true
console.log(isNaN('hello')); // true (because 'hello' cannot be converted to a number, it is considered NaN)

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN('hello')); // false (because 'hello' is not a number)

//  Checking for null or undefined

let ans;
console.log(ans == null); // true (checks for both null and undefined)
console.log(ans === undefined) // true



// "use strict" is a directive that enables strict mode, a way to opt in to a restricted variant of JavaScript. Strict mode makes several changes to normal JavaScript semantics:

// Eliminates some JavaScript silent errors by changing them to throw errors.
// Fixes mistakes that make it difficult for JavaScript engines to perform optimizations.
// Prohibits some syntax likely to be defined in future versions of ECMAScript.



// converting between data types

let v = '42'

console.log(parseInt('42'))

// String Operators

// 1. Concatenation

let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result); // "Hello World"


// 2. Template Literals

let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!"


//Number Formatting

// 1. eval() - The eval() function evaluates a string as JavaScript code. 

let code = "2 + 2";
let val = eval(code);
console.log(val); // 4


// 2. toFixed() - The toFixed() method formats a number to a fixed number of decimal places.

let num = 123.456;
let r = num.toFixed(2)
console.log(r); // "123.46"


// 3. toLocaleString()- The toLocaleString() method formats a number according to the locale-specific conventions.

let n = 123456700000.89;
console.log(n.toLocaleString()); // "1,234,567.89" in the US locale


// 4. toPrecision() - The toPrecision() method formats a number to a specified length.

let n1 = 123.456;
console.log(n1.toPrecision(5)); // "123.46"
console.log(n1.toPrecision(2)); // "1.2e+2"


// signle quote vs doublequote(nesting)


let sentence1 ='It\'s a beautiful day!';
let sentence2 = "She said, \"Hello, World!\"";
console.log(sentence1); // "It's a beautiful day!"
console.log(sentence2); // "She said, "Hello, World!""

