"use strict";
// number, string, boolean, null, undefined
const x = 1;
console.log(x);
let name1 = "John Doe";
let message = `Hello, ${name1}!`;
console.log(message);
let apple = 5;
console.log(apple);
function greet() {
    console.log("Hello!");
}
function greetagain(firstName) {
    console.log("Hello " + firstName);
}
greetagain("Robert Welker");
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function delayedCall(fn) {
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
    arr: "adsfasdf",
};
function DiplayAge(obj) {
    console.log(obj.age);
}
DiplayAge(user);
