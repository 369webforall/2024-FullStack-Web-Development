// Decisions and loops 

// switch - alternate to if(){} else if(){} else{}

switch(expression) {
    case value1:
      // Code to execute if expression === value1
      break;
    case value2:
      // Code to execute if expression === value2
      break;
    // You can have any number of case statements.
    default:
      // Code to execute if expression doesn't match any case
  }

  
  //Expression Evaluation: The expression is evaluated once and compared with the values of each case.

//Case Matching: If a case matches, the corresponding block of code is executed.

//Break Statement: The break statement is used to prevent the code from running into the next case automatically.

//Default Case: The default case executes if no matching case is found. It is optional but recommended for handling unexpected values.

let day = 3;
let dayName;

switch(day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Outputs: Wednesday

// Advance use case , group case

let fruit = "banana";
let color;

switch(fruit) {
  case "banana":
  case "lemon":
    color = "yellow";
    break;
  case "apple":
  case "strawberry":
    color = "red";
    break;
  default:
    color = "unknown";
}

console.log(color); // Outputs: yellow


// loop - for, for in, while, do while, break, continue

// for...in Loop - used for iterating over objects

for (let variable in object) {
    // Code to be executed for each property
  }

  const person = {name: 'John', age: 30, city: 'New York'};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: New York

// while Loop - The while loop executes a block of code as long as the specified condition is true.

while (condition) {
    // Code to be executed as long as condition is true
  }

  
  let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0 1 2 3 4


// do...while Loop - The do...while loop is similar to the while loop, but it ensures that the block of code is executed at least once before the condition is tested.

do {
    // Code to be executed
  } while (condition);

  
  let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// Output: 0 1 2 3 4


// break Statement - The break statement is used to exit a loop or switch statement immediately.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; // Exits the loop when i is 5
    }
    console.log(i);
  }
  // Output: 0 1 2 3 4
  

  // continue Statement - The continue statement skips the current iteration of the loop and proceeds with the next iteration.

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue; // Skips the iteration when i is 5
    }
    console.log(i);
  }
  // Output: 0 1 2 3 4 6 7 8 9
  