# ES6

## Video - class recording

 1. [ES6- class1](https://youtu.be/5o3-sU-9E8I)

 1. [ES6- class2 - async -await - constructor function](https://youtu.be/jGv_vPf2N3k)
 

 **Learn what is important**
 ## Topics

- let and const
- arrow function
- template literals
- default parameters
- rest parameter and spread operator
- Destructuring
- modules
- Promises
- Async and await
- try catch

 **let and const Declarations**

 - **let** allows block-scoped variable declarations.

 - **const** declares constants that cannot be reassigned.

 ```javascript

let x = 10;
x = 20; // Valid
const PI = 3.14;
PI = 3.14159; // Invalid


 ```
 Q. What is the difference between, let, const and var

 - let and const are braces scope and var is functional scope
 ```js
 {
    let x= 10;
    let y = 100;
    var outside = 500;
 }  

console.log(x) // error x is not defiend
console.log(outside) // 500

```


 **Arrow Function:**

 - Arrow functions provide a concise syntax for writing functions.
 - we also called it fat arrow function


 ```javascript
 // basic arrow function

    const add = (a, b) => a + b;

    // arrow function with one parameter

    const greeting = value =>console.log(`hellow ${value}`)

    // arrow function with implicit return

    const square = a =>a*a

 ```

**template literals**

- template literals we also called backtick. 

```js
let x = 6;
let y = 10
console.log(`hello sum of two number is: ${x+y}`)
```



**Default Parameters:**

- Default parameters provide values in case arguments are not passed to a function.

```js
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}


greet()
greet("John Welker")

```

**Rest Parameter and Spread Operator:**

- Rest parameter collects all remaining arguments into an array.
- Spread operator spreads elements of an iterable like an array.

```js

function abcd(a,b,c,...d){
  console.log(a,b,c,d)
}

abcd(1,2,3,4,5,6,7,8)

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // spread operator

console.log(arr2)

```

**Destructuring:**

- Destructuring allows extracting values from arrays or objects into distinct variables.

```js
let a = [2, 3]

let [b, c] = a;

let obj = {name:"dev", age: 45}

let {age} = obj;

console.log(age)

const [first, second] = [1, 2];

const { name, age } = { name: "Bob", age: 25 };

```



**Modules:**

`Modules` in JavaScript are a way to organize code into separate files or modules. They allow you to break down your code into smaller, manageable pieces and facilitate reuse across different parts of your application. ES6 introduced native support for modules in JavaScript.

**`Use type="module"` in the script tag to instruct the web browser to load a JavaScript file as a module.**

1. Module Definition:

A module in JavaScript is defined by creating a separate file that contains its own code.
Each file is treated as a separate module, and you can export specific parts of the module to be used in other modules.

2. Exporting from a Module:

To export functionality from a module, you use the export keyword followed by the name of the variable, function, or class you want to export.

```js
// math.js
export const add = (a, b) => a + b;

```

3. Importing into a Module:
To import functionality from a module, you use the import keyword followed by the name of the variable, function, or class you want to import and the path to the module file.

```js
// main.js
import { add } from './math.js';
```
4. Named Exports:
You can export multiple variables, functions, or classes from a module using named exports.

```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

5. Default Exports:
You can export a single variable, function, or class as the default export from a module.

```js
// math.js
export default function add(a, b) {
    return a + b;
}

```

6. Importing Named Exports:
When importing named exports, you use curly braces {} to specify which variables, functions, or classes you want to import.

```js
// main.js
import { add, subtract } from './math.js';
```

7. Importing Default Exports:
When importing a default export, you use any name you want to assign to the imported value.

```js
// main.js
import myAddFunction from './math.js';
```



**Callback to handle asynchronous code**

1.  First, let's understand synchronous code and problems that arise with synchronous code when fetching data from a database or making API calls.

```js
function getUsers() {
  return [
    { username: 'john', email: 'john@test.com' },
    { username: 'jane', email: 'jane@test.com' },
  ];
}

function findUser(username) {
  const users = getUsers(); 
  const user = users.find((user) => user.username === username);
  return user;
}

console.log(findUser('john'));

```

2.  To simulate the delay, you can use the setTimeout() function. For example:

```js
function getUsers() {
  let users = [];
  setTimeout(() => {
    users = [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
  }, 1000);
  return users;
}

function findUser(username) {
  const users = getUsers(); // A
  const user = users.find((user) => user.username === username); // B
  return user;
}

console.log(findUser('john'));

// output undefined

```

3. Using callbacks to deal with an asynchronous operation

The following example adds a callback argument to the getUsers() and findUser() functions:

```js
function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ]);
  }, 1000);
}

function findUser(username, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.username === username);
    callback(user);
  });
}

findUser('john', console.log);

// output { username: 'john', email: 'john@test.com' }
```

**Promises:**

- `Promises` are objects that represent the eventual completion or failure of an asynchronous operation. They allow you to write asynchronous code in a more readable and manageable way, avoiding callback hell.


1. Creating a Promise:
Promises are created using the Promise constructor, which takes a function as an argument. This function, called the executor, accepts two parameters: resolve and reject.

```js
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous code goes here
    if (/* operation successful */) {
        resolve("Operation completed successfully");
    } else {
        reject("Operation failed");
    }
});
```
2. Promise States:
Promises can be in one of three states: pending, fulfilled, or rejected.
Once a promise settles (either fulfilled or rejected), it becomes immutable.

3. Handling Promise Resolution:
You can handle a promise's resolution using the .then() method, which takes two optional callbacks: onFulfilled for handling a successful resolution and onRejected for handling a failure.

```js
myPromise.then(
    (result) => {
        console.log(result); // Operation completed successfully
    },
    (error) => {
        console.error(error); // Operation failed
    }
);
```



**Async and Await:**

- `async` functions enable using `await` keyword to pause execution until a promise is resolved or rejected.

1. Async Function:

An `async` function is a function that operates asynchronously via the event loop, using the async keyword.
It always returns a promise.

2. Await Operator:
The `await` keyword is used within an async function to pause execution until a promise is resolved or rejected.
It can only be used inside an async function.

3. Error Handling:
You can use try...catch blocks to handle errors within async functions.
Errors thrown inside an async function are converted into rejected promises.

```js
async function fetchData() {
    try {
        const data = await fetchDataFromServer();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

```

`example`

```js
async function fetchData() {
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    console.log(response);
    const data  = await response.json();
    console.log(data)
}

fetchData();

```



**Try Catch:**
- `try` block allows you to define a block of code to be tested for errors.
- `catch` block allows you to define a block of code to be executed, if an error occurs in the try block.

```js

try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
}


```