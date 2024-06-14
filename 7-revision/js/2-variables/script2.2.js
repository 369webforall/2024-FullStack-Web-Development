
let arr = [1,2,3,4,5]
let arr2 = [[5,7,8], [2,4,8], [4,8,7]]

console.log(arr[arr.length - 1])

// Sorting an Array

//JavaScript provides the sort() method to sort an array. By default, the sort() method sorts the array elements as strings in ascending order. If you want to sort an array of numbers or use a custom sorting logic, you need to provide a compare function.


// Sorting an Array of Numbers

let numbers = [4, 2, 5, 1, 3];

// Ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// Sorting an Array of Strings

let fruits = ['banana', 'apple', 'cherry', 'date'];

// Ascending order (alphabetical)
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// Descending order
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits); // Output: ['date', 'cherry', 'banana', 'apple']

// Custom Sorting

let items = [
    { name: 'apple', price: 50 },
    { name: 'banana', price: 30 },
    { name: 'cherry', price: 20 },
    { name: 'date', price: 40 }
];

// Sort by price in ascending order
items.sort((a, b) => a.price - b.price);
console.log(items);
/* Output:
[
    { name: 'cherry', price: 20 },
    { name: 'banana', price: 30 },
    { name: 'date', price: 40 },
    { name: 'apple', price: 50 }
]
*/

// Sort by name in alphabetical order
items.sort((a, b) => a.name.localeCompare(b.name));
console.log(items);
/* Output:
[
    { name: 'apple', price: 50 },
    { name: 'banana', price: 30 },
    { name: 'cherry', price: 20 },
    { name: 'date', price: 40 }
]
*/


// Searching an Array

// JavaScript offers several methods for searching within an array. Here are some commonly used ones:

// indexOf() - Finds the first occurrence of a specified value.

let num = [1, 2, 3, 4, 5];

let index = num.indexOf(3);
console.log(index); // Output: 2

index = num.indexOf(6);
console.log(index); // Output: -1

// includes() - Checks if an array contains a specified value. (T/F)

let n = [1, 2, 3, 4, 5];

let found = n.includes(3);
console.log(found); // Output: true

found = n.includes(6);
console.log(found); // Output: false

// find() - Returns the first element that satisfies a provided testing function.

let products = [
    { name: 'apple', price: 50 },
    { name: 'banana', price: 30 },
    { name: 'cherry', price: 20 },
    { name: 'date', price: 40 }
];

let item = products.find(product => product.price < 40);
console.log(item); // Output: { name: 'banana', price: 30 }



// filter() - Returns a new array with all elements that satisfy the provided testing function.

let obj = [
    { name: 'apple', price: 50 },
    { name: 'banana', price: 30 },
    { name: 'cherry', price: 20 },
    { name: 'date', price: 40 }
];

let cheapItems = obj.filter(item => item.price < 40 );
console.log(cheapItems);
/* Output:
[
    { name: 'banana', price: 30 },
    { name: 'cherry', price: 20 }
]
*/


// scope

let basket = "apple";

function PrintAnswer(){
    console.log(basket)

    let b = 50;

    a()

    function a(){
        let c = 100;
        console.log(c)
    }
}




PrintAnswer();