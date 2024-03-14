// // function statement function subtract(){}
// // function express , const findSquare = function(a, b){}

// // ananomus function(){}

// const add = (a, b)=>{
//     return a+b
// }

// console.log(add(5, 10))

// const greeting = value =>console.log(`hellow ${value}`)

//  // arrow function with implicit return

//  const square = a =>a*a

// let str = "one";
// let str2 = "two";

// console.log(str+" "+str2 + 5+6)

// //``

// console.log(`hello ${str} ${str2} : ${5+6} `) // ${}

// function greet(name = "Apple", num = 10) {
//     console.log(`Hello, ${name}! ${num}`);
// }


// greet()
// greet("John Welker", 100)


// Rest Parameter and Spread Operator:

// ...

// function abcd(...d){
//    let sum = 0
//     for(let i =0 ; i < d.length; i++){
// sum += d[i]
//     }
//     console.log(sum)
//   }
  
//   abcd(1,2,3,4,5,6,7,8)


//   const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5]; // spread operator

// console.log(arr2)

// let obj = {name:"dev", school:"online"}

// let obj2 = {...obj, age:45, school:"abc"}

// console.log(obj2)

// Destructuring:

// let a = [2, 3]



// let [x, y] = a;

// console.log(x)
// console.log(y)

// let obj = {name:"dev", age: 45}

// let {name, age} = obj;

// console.log(age)
// console.log(name)

// const [first, second] = [1, 2];

// console.log(first)


// import {  subtract } from "./math.js";

// import add from "./math.js";


// console.log(add(5, 10))

// console.log(add(500, 50))


// console.log(subtract(100, 25))

// console.log("Start")

// setTimeout(()=>{
//     console.log("Boil water")
// }, 2000)

// setTimeout(()=>{
//     console.log("add coffe")
// }, 5000)


// setTimeout(()=>{
//     console.log("add sugar and milk")
// }, 7000)

// setTimeout(()=>{
//     console.log("serve a coffe")
// }, 9000)

// console.log("end")


// function getUsers() {
//     let users = [];
//     setTimeout(()=>{
//         users = [
//             { username: 'john', email: 'john@test.com' },
//             { username: 'jane', email: 'jane@test.com' },
//             { username: 'dev', email: 'dev@test.com' },
//           ];
//     }, 2000)
//     return users
//   }
  
//   function findUser(username) {
//     const users = getUsers(); 
 
//     const user = users.find((user) => user.username === username);
//     return user;
//   }
  
//   console.log(findUser('john'));
//   console.log(findUser('dev'));
  

//   function getUsers(callback) {
//     setTimeout(() => {
//       callback([
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//         { username: 'dev', email: 'dev@test.com' },
//       ]);
//     }, 1000);
//   }
  
//   function findUser(username, callback) {
//     getUsers((users) => {
//       const user = users.find((user) => user.username === username);
//       callback(user);
//     });
//   }
  
//   findUser('john', console.log);
//   findUser('dev', console.log);
  
//   // output { username: 'john', email: 'john@test.com' }

// Promises: - construction function

const myPrmise =  new Promise((resolve, reject)=>{
if(false){
    resolve("Data is fetched")
}else {
   reject("Try again, data is failed") 
}
})

myPrmise.then((result)=>console.log(result)).catch((error)=>console.log(error))