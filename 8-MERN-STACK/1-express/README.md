# Class Recording

1. [express-restapi intro](https://youtu.be/mTRENvA2A50)

# Building a RESTful API with Express.js: A Beginner’s Guide

**Introduction**

A RESTful API (Representational State Transfer API) is a type of web API that uses HTTP requests to interact with web resources. It is based on the principles of REST, a software architectural style that defines a set of constraints for creating scalable, distributed systems.

A RESTful API typically exposes resources as URLs, and supports a set of operations (called CRUD operations) for interacting with those resources:

- Create (POST): Create a new resource.
- Read (GET): Retrieve an existing resource.
- Update (PUT/PATCH): Update an existing resource.
- Delete (DELETE): Remove an existing resource

1. Install and set up Express.js:

- first create proejct folder
- run command `npm init -y` to initialize the project folder

```js

npm install express mongoose bcryptjs jsonwebtoken body-parser dotenv
npm install --save-dev nodemon

```

2. Setup Express and Basic Middleware (server.js)

```js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// mount routes to server.js

const routes = require("./routes");

app.use("/api", routes);

mongoose
  .connect("mongodb://localhost:27017/school", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

3. Understand basic routes (routs.js)

```js
const express = require("express");
const router = express.Router();

// Define routes
router.get("/users", (req, res) => {
  res.send("List of users");
});

router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Details of user ${userId}`);
});

router.post("/users", (req, res) => {
  res.send("Create a new user");
});

router.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Update user ${userId}`);
});

router.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Delete user ${userId}`);
});

module.exports = router;
```

## Practical restapi tutorial (typescript, express, mongodb)

- create project folder - (library)
- cd library
- initalize the nodejs project `npm init -y`
- `npm install -D typescript nodemon ts-node @types/node`
- `npx tsc --init`
- update package.json file `"dev":"nodemon server.ts"`
- setup eslint `npm init @eslint/config`
- make sure to install the eslint in your vscode extension.
- configure .prettierrc.json `{"tabWidth": 2}`
- also in setting make sure to check the format on save checkbox in vscode editor.

- install express, mongoose
- `npm install express mongoose dotenv`
- `npm i -D @types/express`
- `npm i -D @types/dotenv`
- `npm install -D @types/mongoose --save-dev`
