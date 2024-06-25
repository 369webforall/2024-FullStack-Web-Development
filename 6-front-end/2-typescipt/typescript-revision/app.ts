// number, string, boolean, null, undefine

let x: number = 1;
console.log(x);

x = 100;
console.log(x);

let message: string = "This is message for tomorrow class";
console.log(message);

//union

let ans: number | null = null;

console.log(ans);

let y: number | undefined = 45;

console.log(y);

function greeting(): void {
  console.log("Hello good morning");
}

greeting();

function greet(firstName: string) {
  console.log("Hello " + firstName);
}

greet("Robert Welker");

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));

function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(2));

function delayCall(fn: () => void) {
  setTimeout(fn, 3000);
}

delayCall(function () {
  console.log("run after 3 second");
});

const user = {
  firstName: "Robert",
  lastName: "Welker",
  email: "robert@gmail.com",
  age: 62,
};

interface User1 {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

function userInfo(user: User1) {
  console.log(user.age);
}

userInfo(user);

function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue([1, 2, 3]));

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function filteredUsers(users: User[]) {
  return users.filter((x) => x.age >= 18);
}

console.log(
  filteredUsers([
    {
      firstName: "Robert",
      lastName: "SWelker",
      age: 21,
    },
    {
      firstName: "Tucker",
      lastName: "Hoke",
      age: 16,
    },
  ])
);
