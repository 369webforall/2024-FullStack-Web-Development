# Nodejs

# Video
1. [Nodejs-express-http](https://youtu.be/-B5psKZJrzo)

2. [express-http-server](https://youtu.be/Sv49pWgcFHs)

1. `Node.js:` Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It's built on Chrome's V8 JavaScript engine and is widely used for building server-side and networking applications.

2. `npm (Node Package Manager):` npm is the default package manager for Node.js. It allows developers to install, share, and manage dependencies efficiently.

**Nodejs and its runtime**

First, we understand there are many JavaScript engines, V8 for Chrome, SpiderMonkey for Firefox, which are themselves written in C++ or Rust. They compile JS into bytecode (0, 1).

Developers just use the V8 engine from Chrome, add a few things on top, and create Node.js. Node.js is just the runtime for JavaScript code to run on the backend or server.

What is it used for?

- CLI
- HTTP server
- Video player
- Games

Anything you can write in C++ or Python, you can write in Node.js.

There is a competitor for Node.js called Bun.

`What we will learn and foucs is backed.  how to create http server`

- we learn about express for creating server, creating backend route.

### Express and HTTP with real world examples , Postman

**How doctor works**
- doctor have a skill, went to medical college for many years, and develop the skill to treat other people.
- to earn money doctor can work in a hospital or start his/her own clinic.

**Doctor Clinic**

![doctor clinic image](../images/clinic.png)

- At any given time, only one patient can see the doctor.
- Let's take the doctor's example as the thread of JavaScript.
- The doctor can ask the patient to see the chemist and, after taking medicine, come back to see him again. In the meantime, the doctor can see another patient.

- here doctor expose this work by opening the clinic, so people can find the address and can travel to the clinic.
-  doctor has talent, that is his functionality, and it is exposed to the work by opening the clinic,

**Let's take example of below function**

```js
function calculateSum(n){
    let ans = 0;
    for(let i =1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

let ans = calculateSum(10);
console.log(ans);

```
`If you want to expose this functionality to the world, then HTTP comes into the picture`
-  HTTP stands for Hypertext Transfer Protocol.
- http protocal let's you transfer data from one place to another.
- http lets you expose your algoritham to the world so they can use it.

3. `Creating a New Node.js Project:` To create a new Node.js project, you can use the following commands:

```js
mkdir myproject
cd myproject
npm init

```

- This will initialize a new Node.js project in the myproject directory and prompt you to fill in some details about your project.

`Installing Dependencies: You can install dependencies for your Node.js project using npm. For example:`

`in your terminial / bash`

`npm install express`

- This command install the express package.
- Running node.js script `node index.js`

- Creating a Simple HTTP Server with Express.js: You can create a simple HTTP server using Express.js with just a few lines of code:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


```

`Implement add sum function to the express server logic so any one can use it. but right now our route is local to the machine, only we will be able to pass the data and get the reult`


```js
const express = require('express');
const app = express();

function calculateSum(n){
    let ans = 0;
    for(let i =1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

app.get('/', (req, res) => {
  const n = req.query.n;
  const ans = calculateSum(n);

  res.send(ans.toString());
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```
- req - Request (anything related to the request)
- res - Response (anything related to sending response to client)

**Download and install the Postman in your computer**

- Postman is an API platform for building and using APIs
- We can easily test our api in postman.


## What are request methods

1. GET
2. POST
3. PUT
4. PATCH
4. DELETE


**GET:**

Used to retrieve data from the server.
It should not have any side effects on the server's data.
Typically used for fetching resources.

**POST:**

Used to submit data to be processed to the server.
Commonly used for creating new resources on the server.
May have side effects on the server's data.

**PUT:**

Used to update data on the server.
The entire resource is replaced with the data provided in the request.
It's idempotent, meaning multiple identical requests will have the same effect as a single request.

**PATCH:**

The PATCH method is used to apply partial modifications to a resource. It is similar to the PUT method but is typically used when you want to update only a part of the resource rather than replacing it entirely.

**DELETE:**

Used to remove data from the server.
Deletes the specified resource.
It's idempotent, meaning multiple identical requests will have the same effect as a single request.

In summary:

- GET: Retrieve data.
- POST: Submit data for processing or create a new resource.
- PUT: Update an existing resource.
- DELETE: Remove a resource.

These methods help in creating a uniform interface for interacting with resources on a server and are essential in RESTful API design.

## Status code

- 200 OK
- 201 Created
- 204 No Content
- 400 Bad Request
- 401 Unauthorized
- 404 Not Found
- 500 Internal Server Error

## How we can access the data from client/user

 There are several ways to access data sent from the client in an HTTP request. 
 The most common methods are through 
 req.params,
 req.query, 
 req.body, and 
 req.headers. 
 
 `Here's a brief explanation of each:`

 1. req.params:

- This property contains route parameters in the URL.
- Route parameters are defined in the route path and are accessed using a colon (:) followed by the parameter name.
- For example, in the route /users/:id, you can access the id parameter using req.params.id.

```js
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Use userId to perform operations
});
```
2. req.query:

- This property contains the query parameters in the URL.
- Query parameters are the key-value pairs after the ? in the URL.
- They are accessed using req.query.parameterName.
- Example URL: /users?id=123&name=John

```js
// /users?id=123&name=John

app.get('/users', (req, res) => {
    const userId = req.query.id;
    const userName = req.query.name;
    // Use userId and userName to perform operations
});


```

3. req.body:

- This property contains data sent in the request body, typically used in POST, PUT, and PATCH requests.

- To access the request body, you need to use middleware like express.json() or express.urlencoded().

```js
app.post('/users', (req, res) => {
    const userData = req.body;
    // Use userData to perform operations
});

```

4. req.headers:

- This property contains the HTTP headers sent with the request.
- Headers provide additional information about the request, such as content type, authorization, etc.
- Headers are accessed using req.headers.headerName.

```js
app.get('/users', (req, res) => {
    const authorizationHeader = req.headers.authorization;
    // Use authorizationHeader to perform authentication
});

```

## Build basic express route

 Building an Express router involves organizing your routes and their corresponding logic (controllers) in a structured and maintainable way. Here's a beginner-friendly guide on how to achieve this:

 1. Setting up your project:

 ```js
mkdir my-express-app
cd my-express-app
npm init -y

npm install express


 ```

 Create your main file (e.g., app.js or index.js) where your Express application will be defined.

 2. Creating routes and controllers:

 `Routes:`

 Create a folder to store your routes. You can name it routes. Inside this folder, create separate files for different parts of your application, grouping related routes together. For example, you might have files like userRoutes.js, productRoutes.js, etc.

In each route file, define your routes using Express Router.

`Example structure of a route file (userRoutes.js):`

```js

const express = require('express');
const router = express.Router();

// Import controller functions
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');

// Define routes
router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;


```

`Controllers:`

Create a folder to store your controllers. You can name it controllers. Inside this folder, create separate files for each resource or logical group. For example, userController.js, productController.js, etc.

In each controller file, define functions that handle the logic for your routes.

Example structure of a controller file (userController.js):

```js
// Sample controller functions

// Get all users
exports.getUsers = (req, res) => {
    // Your logic to fetch users from database or any data source
    res.send('GET request to the homepage');
};

// Get user by ID
exports.getUserById = (req, res) => {
    // Your logic to fetch a specific user based on ID
    res.send('GET request to a specific user');
};

// Create a new user
exports.createUser = (req, res) => {
    // Your logic to create a new user
    res.send('POST request to create a new user');
};

// Update a user
exports.updateUser = (req, res) => {
    // Your logic to update a user
    res.send('PUT request to update a user');
};

// Delete a user
exports.deleteUser = (req, res) => {
    // Your logic to delete a user
    res.send('DELETE request to delete a user');
};


```


3. Integrating routes with your Express application:

In your main file (app.js or index.js), require the route files and use them with your Express app.

```js
const express = require('express');
const app = express();

// Require route files
const userRoutes = require('./routes/userRoutes');
// Add more route files as needed

// Use routes in your Express app
app.use('/users', userRoutes);
// Add more routes as needed

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


```

## Middleware

Express middleware functions are functions that have access to the request (req) and response (res) objects in an Express application's request-response cycle. Middleware functions can execute code, modify the request and response objects, end the request-response cycle, or call the next middleware function in the stack.

Middleware functions can be used for various purposes, such as logging, authentication, error handling, parsing request bodies, etc. They are executed sequentially, and each middleware function in the stack can either terminate the request-response cycle or pass control to the next middleware function by calling the next() function.

**Example**

```js
const express = require('express');
const app = express();

// Middleware function to log request details
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware function
});

// Middleware function to parse JSON request bodies
app.use(express.json());

// Route handler
app.post('/api/users', (req, res) => {
    console.log('Creating a new user:', req.body);
    // Logic to create a new user
    res.status(201).send('User created successfully');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



```

We define a middleware function to log request details using app.use(). This middleware function logs the HTTP method (req.method) and the requested URL (req.url) for every incoming request.

We use another middleware function provided by Express (express.json()) to parse JSON request bodies. This middleware function parses incoming request bodies with JSON payloads and makes the parsed JSON available in req.body.

We define a route handler for POST requests to /api/users. Inside this route handler, we access the parsed JSON request body using req.body and perform some logic (in this case, logging the user data).

We define an error-handling middleware function with four parameters (err, req, res, next). This middleware function handles errors that occur during the request-response cycle. If an error occurs in any middleware or route handler, Express passes the error to this middleware function.

Finally, we start the Express server and listen on a specified port.

Middleware functions provide a powerful way to modularize and reuse code in an Express application, improving maintainability and readability. They allow you to separate concerns and handle common tasks in a centralized manner.

