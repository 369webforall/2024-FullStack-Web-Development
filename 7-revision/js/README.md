# CLASS RECORDING


- How javascript code execute, is javascript synchronous or Asynchronous, is javascript single threaded or multi-threaded.


```js
console.log("start");

let x = 10;
let y = 20;

function sum(n){
    let z = 5
    let result = x + y + n + z
    return result
}

const ans = sum(5)

console.log(ans)
console.log("end")

```

## Variable, DataType, Conditional, Loops, Function, Array, Object

## 1. Javascript Operators, Methods, and Keywords

1.1 Complete and debug code that  uses assignment and arithmetic  operators

```js
// Initial assignment
let number = 10;
console.log("Initial value:", number);

// Addition assignment
number += 5;  // equivalent to number = number + 5
console.log("After addition (+= 5):", number);

// Subtraction assignment
number -= 3;  // equivalent to number = number - 3
console.log("After subtraction (-= 3):", number);

// Multiplication assignment
number *= 2;  // equivalent to number = number * 2
console.log("After multiplication (*= 2):", number);

// Division assignment
number /= 4;  // equivalent to number = number / 4
console.log("After division (/= 4):", number);

// Modulus assignment
number %= 3;  // equivalent to number = number % 3
console.log("After modulus (%= 3):", number);

// Exponentiation assignment
number **= 2;  // equivalent to number = number ** 2
console.log("After exponentiation (**= 2):", number);

// Floor division assignment (using Math.floor to mimic floor division)
number = Math.floor(number / 2);  // equivalent to floor division
console.log("After floor division (using Math.floor):", number);

// Final value
console.log("Final value:", number);


//Result


Initial value: 10
After addition (+= 5): 15
After subtraction (-= 3): 12
After multiplication (*= 2): 24
After division (/= 4): 6
After modulus (%= 3): 0
After exponentiation (**= 2): 0
After floor division (using Math.floor): 0
Final value: 0



```

**Explanation:**

Initial assignment: Assigns the value 10 to the variable number.
Addition assignment (+=): Adds 5 to number.
Subtraction assignment (-=): Subtracts 3 from number.
Multiplication assignment (*=): Multiplies number by 2.
Division assignment (/=): Divides number by 4.
Modulus assignment (%=): Assigns number the remainder of number divided by 3.
Exponentiation assignment (**=): Raises number to the power of 2.
Floor division assignment: Uses Math.floor to perform floor division, which is similar to integer division in other languages.

1.2 Apply JavaScript best practices

```js
// Use constants for fixed values and let for mutable values
const INITIAL_VALUE = 10;
let number = INITIAL_VALUE;

// Log initial value
console.log("Initial value:", number);

// Addition assignment
number += 5;  // equivalent to number = number + 5
console.log("After addition (+= 5):", number);

// Subtraction assignment
number -= 3;  // equivalent to number = number - 3
console.log("After subtraction (-= 3):", number);

// Multiplication assignment
number *= 2;  // equivalent to number = number * 2
console.log("After multiplication (*= 2):", number);

// Division assignment
number /= 4;  // equivalent to number = number / 4
console.log("After division (/= 4):", number);

// Modulus assignment
number %= 3;  // equivalent to number = number % 3
console.log("After modulus (%= 3):", number);

// Exponentiation assignment
number **= 2;  // equivalent to number = number ** 2
console.log("After exponentiation (**= 2):", number);

// Floor division assignment (using Math.floor to mimic floor division)
number = Math.floor(number / 2);  // equivalent to floor division
console.log("After floor division (using Math.floor):", number);

// Final value
console.log("Final value:", number);

// Using debugger keyword to set a breakpoint for debugging
debugger;

// Further operations can be performed here, if needed

```

**Best Practices and Explanations:**

`Use of const and let:`

const is used for the initial value, which does not change.
let is used for the variable number, which will be modified.

`Proper Indentation and Comments:`

Each code block and significant line has appropriate comments to explain what is happening.
Indentation is used to enhance readability.

`Naming Conventions:`

Constants are named using UPPER_CASE.
Variables are named using camelCase.

`Use of console.log:`

console.log is used to print the values at each step for better visibility during debugging.
Use of debugger Keyword:

The debugger keyword is included to set a breakpoint in the code. When running the code in a debugging environment, execution will pause at this point, allowing you to inspect the current state.

`Avoiding Reserved Keywords:`

Ensure that variable names do not conflict with JavaScript reserved keywords.

`NoScript:`

To handle environments where JavaScript might be disabled, you can include <noscript> tags in your HTML, but since we're focusing on pure JavaScript here, it's not shown.



```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Best Practices</title>
</head>
<body>
    <h1>Check the Console for Output</h1>
    <script>
        // JavaScript code here
        const INITIAL_VALUE = 10;
        let number = INITIAL_VALUE;

        // Log initial value
        console.log("Initial value:", number);

        // Addition assignment
        number += 5;  // equivalent to number = number + 5
        console.log("After addition (+= 5):", number);

        // Subtraction assignment
        number -= 3;  // equivalent to number = number - 3
        console.log("After subtraction (-= 3):", number);

        // Multiplication assignment
        number *= 2;  // equivalent to number = number * 2
        console.log("After multiplication (*= 2):", number);

        // Division assignment
        number /= 4;  // equivalent to number = number / 4
        console.log("After division (/= 4):", number);

        // Modulus assignment
        number %= 3;  // equivalent to number = number % 3
        console.log("After modulus (%= 3):", number);

        // Exponentiation assignment
        number **= 2;  // equivalent to number = number ** 2
        console.log("After exponentiation (**= 2):", number);

        // Floor division assignment (using Math.floor to mimic floor division)
        number = Math.floor(number / 2);  // equivalent to floor division
        console.log("After floor division (using Math.floor):", number);

        // Final value
        console.log("Final value:", number);

        // Using debugger keyword to set a breakpoint for debugging
        debugger;

        // Further operations can be performed here, if needed
    </script>
    <noscript>
        JavaScript is disabled in your browser. Please enable JavaScript to view this page.
    </noscript>
</body>
</html>

```

