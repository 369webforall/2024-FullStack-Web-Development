"use strict";
// number, string, boolean, null, undefine
let x = 1;
console.log(x);
x = 100;
console.log(x);
let message = "This is message for tomorrow class";
console.log(message);
//union
let ans = null;
console.log(ans);
let y = 45;
console.log(y);
function greeting() {
    console.log("Hello good morning");
}
greeting();
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("Robert Welker");
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
function delayCall(fn) {
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
function userInfo(user) {
    console.log(user.age);
}
userInfo(user);
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([1, 2, 3]));
function filteredUsers(users) {
    return users.filter((x) => x.age >= 18);
}
console.log(filteredUsers([
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
]));
