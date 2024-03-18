# Nodejs


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

  res.send('Hello, your answer is', ans);
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