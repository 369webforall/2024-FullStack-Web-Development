// 1. output the result - console.log("some data");
// what are data - string,number, boolean, null, undefined, array, object
// 2. operators - comperison,logical, mathematical 
// 3. variable - let & const - in a memory to store a value we use variable,
// 4. conditionals - if(), if() else, if else if else
// 5. loops- for
// 6. function 

let num = 100;

console.log(num)

num =200;

console.log(num)


const sum = function(){
return 500
}

console.log(sum())

if(true){
   console.log(true) 
}

if(false){
    console.log(true) 
 }else if (8 >= 6) {
    console.log("else if")
 } 
 
 else{
    console.log(false)
 }

//  let string = "df asdfasdfadsf fadf adfads" // index start with 0
//  let arr = [4,5,6,"fasdf"] //

//  for(let i =1; 1< 4; i++){

//  }

//  console.log("next line")



 function printOneTo10(){
    console.log("Start function")
 for(let i = 1; i <= 10; i++){
    console.log(i)
 }

 console.log("end loop")
 }


 printOneTo10()