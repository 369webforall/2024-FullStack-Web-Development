# Class Recording

1. [express-restapi intro](https://youtu.be/mTRENvA2A50)

2. [express-restapi project](https://youtu.be/O5uzlpWqcqE)

3. [express-restapi project- part 2](https://youtu.be/sp-dB4bS59A)

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

**setup config file**

```js
// src/config/config.ts

import { config as conf } from "dotenv";
conf();

const _config = {
  port: process.env.PORT,
  databaseURL: process.env.MONGO_CONNECTION_STRING,
  env: process.env.NODE_ENV,
};

export const config = Object.freeze(_config);
```

```js
// in root create server.ts

import app from "./src/app";
import { config } from "./src/config/config";

const startServer = () => {
  let PORT = config.port || 3000;
  app.listen(PORT, () => {
    console.log("server is running in port", PORT);
  });
};

startServer();
```

**setup db connection**

- connection string from mongodb database, with password
- create db.ts file in config folder
- add property to config.ts file for database connection

```js
// db.ts
import mongoose from "mongoose";

import { config } from "./config";
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to datbase sucessfully");
    });
    mongoose.connection.on("error", (err) => {
      console.log("Error in connectiong database", err);
    });
    await mongoose.connect(config.databaseURL as string);
  } catch (error) {
    console.error("Failed to connect datbase", error);
    process.exit(1);
  }
};

export default connectDB;

```

**Error handling**

- Create Globla error handling function - src/middlewares/globalErrorHandler.ts
- we will use package called `npm i http-errors` to catch the error.
- Type for http-errors ` npm i -D @types/http-errors`

```js
import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";
export const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    message: err.message,
    errorStack: config.env === "development" ? err.stack : "",
  });
};
```

**Build user endpoints**

- userRouter - router job is to execute the request http method (get, post, put delete)

```js
// - users/userRouter.ts

import express from "express";
import { createUser } from "./userController";

const userRouter = express.Router();

userRouter.post("/register", createUser);

export default userRouter;
```

- user controller - It's just the function which handle all the logic for that end point.

```js
// users/usercontroller.ts

import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import userModel from "./userModel";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { User } from "./userTypes";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }

  // Database call.
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      const error = createHttpError(
        400,
        "User already exists with this email."
      );
      return next(error);
    }
  } catch (err) {
    return next(createHttpError(500, "Error while getting user"));
  }

  /// password -> hash

  const hashedPassword = await bcrypt.hash(password, 10);

  let newUser: User;
  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (err) {
    return next(createHttpError(500, "Error while creating user."));
  }

  try {
    // Token generation JWT
    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
      algorithm: "HS256",
    });
    // Response
    res.status(201).json({ accessToken: token });
  } catch (err) {
    return next(createHttpError(500, "Error while signing the jwt token"));
  }
};


export { createUser };
```

- user model: we use mongoose ORM for mongodb database.

**Introduction to Mongoose for MongoDB**

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

```js
// users/usermodel.ts

import mongoose from "mongoose";
import { User } from "./userTypes";
const userSchema =
  new mongoose.Schema() <
  User >
  ({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true });

// users collection

export default mongoose.model < User > ("User", userSchema);
```

- define type for your user

```js
// users/userTypes.ts

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}
```

**Login point (post request)**

```js
//post method
// userRouter - userRouter.post("/login", loginUser);

// userController.ts

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }

  // todo: wrap in try catch.
  const user = await userModel.findOne({ email });
  if (!user) {
    return next(createHttpError(404, "User not found."));
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(createHttpError(400, "Username or password incorrect!"));
  }

  // todo: handle errors
  // Create accesstoken
  const token = sign({ sub: user._id }, config.jwtSecret as string, {
    expiresIn: "7d",
    algorithm: "HS256",
  });

  res.json({ accessToken: token });
};


export {loginUser}
```

### Book Api

**book endpoint**

```js
//book/bookTypes.ts

import { User } from "../user/userTypes";

export interface Book {
  _id: string;
  title: string;
  description: string;
  author: User;
  genre: string;
  coverImage: string;
  file: string;
  createdAt: Date;
  updatedAt: Date;
}
```

- model

```js
//bookModel.ts

import mongoose from "mongoose";
import { Book } from "./bookTypes";

const bookSchema =
  new mongoose.Schema() <
  Book >
  ({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      // add ref
      ref: "User",
      required: true,
    },
    // we will store coverImage and pdf file in cloudinary
    coverImage: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      requied: true,
    },
    genre: {
      type: String,
      required: true,
    },
  },
  { timestamps: true });

export default mongoose.model < Book > ("Book", bookSchema);
```

- Router

```js
// book/bookRouter.ts
import path from "node:path";
import express from "express";
import { createBook } from "./bookController";
import multer from "multer";

const bookRouter = express.Router();

// file store local ->
const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  // todo: put limit 10mb max.
  limits: { fileSize: 3e7 }, // 30mb 30 * 1024 * 1024
});

// routes
// /api/books

bookRouter.post(
  "/",
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createBook
);

export default bookRouter;
```

- Controller
- Here we are going to upload pdf file and image to cloudinary - online storage
- to receive multipart form-data we will use library called multer.
- Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

`npm i multer`

- we need to add this multer middleware in router.

```js
// bookController.ts

import { Request, Response, NextFunction } from "express";
import bookModel from "./bookModel";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const { title, genre, description } = req.body;
  console.log("files", req.files);

  // upload file in coudinary - create account

  res.json({});
};

export { createBook };
```
