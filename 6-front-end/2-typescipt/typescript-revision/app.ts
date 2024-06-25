// number, string, boolean, null, undefined

const x: number = 1;
console.log(x);

let name1: string = "John Doe";
let message: string = `Hello, ${name1}!`;

console.log(message);

let apple: number | undefined = 5;

console.log(apple);

function greet(): void {
  console.log("Hello!");
}

function greetagain(firstName: string) {
  console.log("Hello " + firstName);
}

greetagain("Robert Welker");

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));

function delayedCall(fn: () => void) {
  setTimeout(fn, 4000);
}

delayedCall(function () {
  console.log("hi there");
});

const user = {
  firstName: "Robert",
  lastName: "Welker",
  email: "robert@gmail.com",
  age: 62,
};

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

function DiplayAge(obj: User) {
  console.log(obj.age);
}

DiplayAge(user);

[{}];
