# Video 

## Topics
- Lexical environment
- scope
- scope chain
- closure
- exercise

**Lexical Environment:**

`Explanation:`
- A lexical environment consists of all the variables and their values that are accessible from a particular portion of a program during its execution. It also includes references to the outer lexical environments forming a chain.

```js
function outer() {
    let a = 10;
    function inner() {
        console.log(a); // Accessing 'a' from outer lexical environment
    }
    inner();
}
outer(); // Output: 10

```

**Scope:**

`Explanation:` 

- Scope refers to the accessibility of variables and functions in a particular context in code. It determines where variables and functions are accessible.

```js
function outer() {
    let a = 10;
    console.log(a); // 'a' is accessible within the scope of outer function
}
console.log(a); // 'a' is not accessible here

```

**Scope Chain:**

`Explanation:`

- The scope chain refers to the hierarchy of scopes in a program. When looking up a variable, the interpreter traverses through this chain to find the variable.

```js
let globalVar = 'global';

function outer() {
    let outerVar = 'outer';

    function inner() {
        console.log(globalVar); // Accessing globalVar from the outer scope chain
        console.log(outerVar); // Accessing outerVar from the immediate outer scope
    }

    inner();
}

outer();


```

**Closure:**

`Explanation:`

- Closure is a combination of a function and the lexical environment within which that function was declared. It allows a function to access variables from its outer scope even after the outer function has finished executing.

```js
function outer() {
    let a = 10;
    function inner() {
        console.log(a); // inner function forms a closure over 'a'
    }
    return inner;
}
let closureFunc = outer();
closureFunc(); // Output: 10

```

**Problem: Write a function that creates a counter using closure.**

```js
function createCounter() {
    let count = 0;
    function increment() {
        count++;
        console.log(count);
    }
    return increment;
}

let counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

```