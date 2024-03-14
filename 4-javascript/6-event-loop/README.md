# Video 

## Topics
- Asynchronous JavaScript
- Event Loop



**Asynchronous JavaScript:**

- `Asynchronous JavaScript` allows certain operations to be performed independently of the main execution thread, meaning that they don't block the execution of subsequent code. This is crucial for tasks like fetching data from a server, performing animations, or handling user input without freezing the entire application.

`Example 1: setTimeout()`

```js
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000); // Executes after 2 seconds

console.log("End");


```

`In this example, setTimeout() schedules a function to be executed after a certain delay (in this case, 2 seconds). While the timer is running, other code continues to execute. So, "End" gets logged before "Inside setTimeout".`

**Event Loop:**

The Event Loop is a mechanism that enables JavaScript to handle asynchronous operations by continuously monitoring the call stack and the callback queue & Micro task queue. It ensures that tasks are executed in the correct order, without blocking the main thread.

`Example 2: setInterval()`

```js
function printNumbers() {
    let count = 0;
    const intervalId = setInterval(() => {
        console.log(count++);
        if (count > 5) {
            clearInterval(intervalId);
            console.log("Done");
        }
    }, 1000); // Prints a number every second
}

printNumbers();

```

`In this example, setInterval() repeatedly executes a function at a specified interval (every second in this case). Meanwhile, other code can continue to execute. Once the condition (count > 5) is met, the interval is cleared, and "Done" is logged.`

`The Event Loop continuously checks the call stack for any tasks to execute. If the stack is empty, it looks into the callback queue for tasks to move into the call stack. This ensures that asynchronous tasks are executed in the order they were scheduled.`

`Understanding asynchronous JavaScript and the Event Loop is crucial for building responsive and efficient web applications. These concepts are foundational for handling tasks like network requests, animations, and user interactions without blocking the main thread.`


**fetch API**
`Using the fetch API is a common way to perform asynchronous operations like making HTTP requests to fetch data from a server. Here's an example of how to use fetch to make an API call:`

```js
console.log("Start");

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log("Data received:", data);
    })
    .catch(error => {
        console.error("Error occurred:", error);
    });

console.log("End");

```

`fetch('https://jsonplaceholder.typicode.com/posts/1') initiates an HTTP GET request to the specified URL.`

`.then(response => response.json()) parses the response as JSON. This returns a Promise containing the parsed JSON data.`

`.then(data => {...}) is a callback function that is executed when the JSON data is successfully received. It logs the received data to the console.`

`.catch(error => {...}) is a callback function that handles any errors that occur during the fetch operation.`

`The key point to note here is that fetch is asynchronous, meaning that the code after fetch (like the console.log("End")) continues to execute immediately after fetch is called, without waiting for the response from the server. The response is handled asynchronously via the promise chain .then().then().catch(). This allows the main thread to remain responsive while waiting for the server response.`


**Web APIs**
`
- setTimneout()
- DOM apis
- fetch()
- localStorage
- console
- location
`

