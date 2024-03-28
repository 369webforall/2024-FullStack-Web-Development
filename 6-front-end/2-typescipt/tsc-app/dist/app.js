"use strict";
let x = 1;
console.log(x);
x = 200;
console.log(x);
let select = 50;
select = null;
console.log(select);
// function greet(): void {
//     console.log("Hello!");
// }
// greet();
function greet(firstName) {
    console.log(`Hello ${firstName}`);
}
greet("Robert");
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(2));
function delayedCall(fn) {
    setTimeout(fn, 1000);
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
function isLegalAgain(user1) {
    if (user1.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegalAgain(user));
