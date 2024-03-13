# Promise

[Promise video Link](https://www.youtube.com/watch?v=NOzi4wBHn0o&t=125s)

[Async await video Link](https://www.youtube.com/watch?v=9j1dZwFEJ-c)


 - `Promises Defenition` are objects that represent the eventual completion or failure of an asynchronous operation. They allow you to write asynchronous code in a more readable and manageable way, avoiding callback hell.


 

  **State:** 

  **Pending:** This is the initial state of a promise. It represents that the asynchronous operation associated with the promise hasn't completed yet.

**Fulfilled:** A promise is fulfilled when the asynchronous operation has been completed successfully. At this stage, the promise returns a value or result.

**Rejected:** If the asynchronous operation encounters an error or fails for some reason, the promise is rejected. This indicates that the promised action could not be fulfilled. A reason or error object may be passed along with the rejection to provide information about the cause of the failure.

These states define the lifecycle of a promise, providing a way to handle asynchronous operations in a more organized and manageable manner in JavaScript.


1. Creating a Promise:
Promises are created using the Promise constructor, which takes a function as an argument. This function, called the executor, accepts two parameters: resolve and reject.

```js
function SolveProblem(){
return new Promise((resolve, reject)=>{
    let solve = true;
    if(solve){
        resolve("Problem is solved")
    }else {
        reject("There is error while solving problem")
    }
})
}

// to receive data from the promise, use then method and to in case of error u can catpure the error by using catch method.

SolveProblem().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

```

 `Prmomise in simple term` 

 - An object that manages asynchronous operation.

 - Complete this task in order.
 1. Walk the dog
 2. clean kitchen
 3. take out the trash
 
 ```js
 function walkDog(callback){
    setTimeout(()=>{
        console.log("You walk the dog 🐕")
        callback();
    }, 1500)
}

function cleanKitchen(callback){
    setTimeout(()=>{
        console.log("You clean kitchen 🔪")
        callback()
    }, 2500)
}

function takeOutTrash(callback){
    setTimeout(()=>{
        console.log("You takeout trash 🚜")
        callback()
    }, 500)
}

// if there is lot of callback, then its the callback hell and this is not the right way of doing async work.

walkDog(()=>{
    cleanKitchen(()=>{
        takeOutTrash(()=>console.log("task is completed"))
    })
})


 ```
 
 **Promise is the solution**

 ```js

function walkDog(){
     return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("You walk the dog 🐕") 
        }, 1500)
     })
    }
    
    function cleanKitchen(){
        

        return new Promise((resolve, reject)=>{

            setTimeout(()=>{
                resolve("You clean kitchen 🔪")
            }, 2500)   
        })
    }
    
    function takeOutTrash(){

        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("You takeout trash 🚜")  
            }, 500)
        })
    
    }
    
   walkDog().then((value)=>{
    console.log(value);
    return cleanKitchen();
   }).then((value)=>{
    console.log(value);
    return takeOutTrash();
   }).then((value)=>{
    console.log(value);
    console.log("the task is completed")
   })

 ```

 **async await** is better and cleaner way to write the promise.

```js
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You walk the dog 🐕");
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean kitchen 🔪");
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You takeout trash 🚜");
    }, 500);
  });
}

async function workOrder(){
const walkdog = await walkDog();
console.log(walkdog);

const clean =await cleanKitchen();
console.log(clean)

const trash = await takeOutTrash();
console.log(trash)
console.log("All the work is completed")
}

workOrder();

```