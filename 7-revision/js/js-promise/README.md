## Throw, and Try...Catch...Finally

- The `try` statement defines a code block to run (to try).

- The `catch` statement defines a code block to handle any error.

- The `finally` statement defines a code block to run regardless of the result.

- The `throw` statement defines a custom error.

`console.log(a)`


```js


try{
console.log(a)
}catch(err){
console.log(err.name)
console.log(err.message)
}

const b = 100;

console.log("My answer is", b);

```


## Promises in JavaScript

A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

### Key Features of a Promise

`Pending:` The initial state. The operation is neither fulfilled nor rejected.
`Fulfilled:` The operation completed successfully.
`Rejected:` The operation failed.

### Basic Promise Syntax
A Promise is created using the Promise constructor, which takes a single function as an argument. This function receives two functions as parameters: resolve and reject.

```js
let promise = new Promise(function(resolve, reject) {
  // Asynchronous operation
  if (/* operation successful */) {
    resolve(value);  // fulfilled with a value
  } else {
    reject(error);   // rejected with an error
  }
});

```
### Handling Promises

To handle the results of a Promise, you use the then, catch, and finally methods.

`then:` for handling fulfillment
`catch:` for handling rejection
`finally:` for running code regardless of the outcome

Example: Promise with Exception Handling

Here's an example that demonstrates creating a Promise, fulfilling it, rejecting it, and handling exceptions.

```js
function asyncOperation() {
  return new Promise((resolve, reject) => {
    let success = true; // Change this to `false` to simulate an error

    setTimeout(() => {
      if (success) {
        resolve('Operation was successful!');
      } else {
        reject('Operation failed!');
      }
    }, 1000);
  });
}

// Using the Promise
asyncOperation()
  .then(result => {
    console.log(result); // This runs if the promise is fulfilled
  })
  .catch(error => {
    console.error(error); // This runs if the promise is rejected
  })
  .finally(() => {
    console.log('Operation completed, regardless of success or failure.');
  });

  ```

Explanation

**Promise Creation:**

- asyncOperation returns a new Promise.

- Inside the Promise, we simulate an asynchronous operation using setTimeout.

- After 1 second, depending on the success variable, the Promise is either resolved or rejected.

**Handling Promise:**

- `then` is called if the Promise is fulfilled (i.e., the asynchronous operation was successful).
- `catch` is called if the Promise is rejected (i.e., the asynchronous operation failed).
- `finally` is called regardless of whether the Promise is fulfilled or rejected, making it a good place for cleanup code.

### Advanced Exception Handling in Promises

For more complex scenarios, you might want to handle errors more granularly within chained then calls.

```js
function asyncOperation() {
  return new Promise((resolve, reject) => {
    let success = true; // Change this to `false` to simulate an error

    setTimeout(() => {
      if (success) {
        resolve('Operation was successful!');
      } else {
        reject('Operation failed!');
      }
    }, 1000);
  });
}

asyncOperation()
  .then(result => {
    console.log(result); // This runs if the promise is fulfilled
    // Simulate a potential error in the then chain
    throw new Error('Something went wrong in then');
  })
  .catch(error => {
    console.error('Caught an error:', error); // This catches both rejection and errors in the then chain
  })
  .finally(() => {
    console.log('Operation completed, regardless of success or failure.');
  });
  ```
Explanation

- If an error occurs inside a then block (e.g., throw new Error('...')), it is caught by the nearest catch block down the chain.
- This ensures that errors are propagated and handled properly, maintaining the robustness of the asynchronous flow.

- Using Promises and their handling methods (then, catch, finally), you can effectively manage asynchronous operations and their outcomes in JavaScript.



## async / awit

### What is async ?
- async is keyword to create a async function.

```js
async function getData(){
  return "Hello Programmer"
}

const promiseData = getData();

promiseData.then((res)=>console.log(res))


```

-  async function job is to wrap the data in promise object and return the promise.

- if we return the promise then it will not wrap in new promise, it will just return the same promise.

example.

```js
let p = new Promise((resolve, reject)=>{
  resolve('Promise is resolve and value is correct')
})

async function getData(){
  return p;
}

const promiseData = getData();

promiseData.then((res)=>console.log(res))

```



### What is await ?

- async and await is used for handling promises.
- await can only be used inside an async function.

```js
let p = new Promise((resolve, reject)=>{
  resolve('Promise is resolve and value is correct')
})


async function handlePromise(){
  const res = await p;
  console.log(res)
}

handlePromise();

```

Example with setTimeout 

```js
const p = new Promise((resolve, reject)=>{
setTimeout(()=>{
  resolve('Promise is resolved after 3000ms')
}, 3000)
})


function getData(){

  // js engine will not wait for promise to resolve.
  p.then((res)=>console.log(res));

  console.log("Js engine will not wait to run next line of code and i am the proof")


}

getData();

```

// using aync await

```js
const p = new Promise((resolve, reject)=>{
setTimeout(()=>{
  resolve('Promise is resolved after 3000ms')
}, 3000)
})


async function handlePromise(){
  const res = await p;
  console.log(res)
  console.log("code execution will wait till the promise is resolved")
}

handlePromise();

```