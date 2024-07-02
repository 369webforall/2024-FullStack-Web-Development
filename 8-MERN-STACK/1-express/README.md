# Class Recording

1. [express-restapi intro](https://youtu.be/mTRENvA2A50)

2. [express-restapi project-1](https://youtu.be/O5uzlpWqcqE)

3. [express-restapi project- part 2](https://youtu.be/sp-dB4bS59A)

4. [express-restapi project- part 3](https://youtu.be/qjNDRAqBR_E)

5. [express-restapi project- part 4](https://youtu.be/kQ4G07E8XLo)

6. [express-restapi project- part 5](https://youtu.be/mkIJKp1bu3w)

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

### Add book cover and pdf file to coludinary

- express doesn't have support for uploading file, so we use outside library called `multer`
- `npm i --save multer`
- `npm i -D @types/multer`
- multer is middleware and we add multer as second parameter in our router.
- multer is readymade middleware (it's just a function)
- Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

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
  limits: { fileSize: 10 * 1024 * 1024 }, // 10mb 1 0 * 1024 * 1024
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

```js
// bookController.ts

import { Request, Response, NextFunction } from "express";
import bookModel from "./bookModel";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  // const { title, genre, description } = req.body;
  // console.log("files", req.files);

  // upload file in coudinary - create account

  res.json({});
};

export { createBook };
```

- Here we are going to upload pdf file and image to cloudinary - online storage
- login to cloudinary
- crearte cloudinary.ts file in config folder
- `npm i cloudinary`
- update .env file
- CLOUDINARY_CLOUD=dpthkmox1
- CLOUDINARY_API_KEY=468119127485962
- CLOUDINARY_API_SECRET=HlaP0aHkIQet-QiVuhpDPlOuWZY

- update configfile

```js
// cloudinary.ts

import { v2 as cloudinary } from "cloudinary";
import { configFile } from "./config";

// Configuration
cloudinary.config({
  cloud_name: configFile.cloudName,
  api_key: configFile.cloudApi,
  api_secret: configFile.cloudSecret,
});

export default cloudinary;
```

```js
// bookRouter.ts

import authenticate from "../middlewares/authenticate";

bookRouter.post(
  "/",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createBook
);
```

- let create authenticate.ts file inside middleware folder so we can pass the token in req.
- import this file in bookRouter.ts
- and pass as middleware before multer;

```js
//authenticate.ts
// postman Headers -Authorization - Bearer tokenkey

//verify: This is a function from the jsonwebtoken library that verifies a JWT. It checks if the token is valid and has not been tampered with.

import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { verify } from "jsonwebtoken";
import { config } from "../config/config";

export interface AuthRequest extends Request {
  userId: string;
}
const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");
  if (!token) {
    return next(createHttpError(401, "Authorization token is required."));
  }

  try {
    const parsedToken = token.split(" ")[1];
    const decoded = verify(parsedToken, config.jwtSecret as string);
    const _req = req as AuthRequest;
    _req.userId = decoded.sub as string;

    next();
  } catch (err) {
    return next(createHttpError(401, "Token expired."));
  }
};

export default authenticate;
```

### Controller.ts

```js
// bookController.ts
import path from "node:path";
import fs from "node:fs";
import { Request, Response, NextFunction } from "express";
import bookModel from "./bookModel";
import cloudinary from "../config/cloudinary";
import createHttpError from "http-errors";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  // const { title, genre, description } = req.body;
  // console.log("files", req.files);

  // to upload file in coudinary - create account and get api variables first.

const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    // 'application/pdf'
    const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);
    const fileName = files.coverImage[0].filename;
    const filePath = path.resolve(
        __dirname,
        "../../public/data/uploads",
        fileName
    );

    try {
        const uploadResult = await cloudinary.uploader.upload(filePath, {
            filename_override: fileName,
            folder: "book-covers",
            format: coverImageMimeType,
        });

        const bookFileName = files.file[0].filename;
        const bookFilePath = path.resolve(
            __dirname,
            "../../public/data/uploads",
            bookFileName
        );

        const bookFileUploadResult = await cloudinary.uploader.upload(
            bookFilePath,
            {
                resource_type: "raw",
                filename_override: bookFileName,
                folder: "book-pdfs",
                format: "pdf",
            }
        );
        const _req = req as AuthRequest;

        const newBook = await bookModel.create({
            title,
            description,
            genre,
            author: _req.userId,
            coverImage: uploadResult.secure_url,
            file: bookFileUploadResult.secure_url,
        });

        // Delete temp.files
        // todo: wrap in try catch...
        await fs.promises.unlink(filePath);
        await fs.promises.unlink(bookFilePath);

        res.status(201).json({ id: newBook._id });
    } catch (err) {
        console.log(err);
        return next(createHttpError(500, "Error while uploading the files."));
    }

};

export { createBook };

```

### List all books

```js
// bookRouter.ts

bookRouter.get("/", listBooks);
```

```js
//bookController.ts

const listBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const book = await bookModel.find().populate("author", "name");
    res.json(book);
  } catch (err) {
    return next(createHttpError(500, "Error while getting a book"));
  }
};
```

### get singlebook with id

```js
// bookRouter.ts
bookRouter.get("/:bookId", getSingleBook);
```

```js
// bookController.ts

const getSingleBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bookId = req.params.bookId;

  try {
    const book = await bookModel
      .findOne({ _id: bookId })
      // populate author field
      .populate("author", "name");
    if (!book) {
      return next(createHttpError(404, "Book not found."));
    }

    return res.json(book);
  } catch (err) {
    return next(createHttpError(500, "Error while getting a book"));
  }
};
```

### Delete book

```js
// bookRouter.ts
bookRouter.delete("/:bookId", authenticate, deleteBook);
```

```js
//bookController.ts

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;

    const book = await bookModel.findOne({ _id: bookId });
    if (!book) {
        return next(createHttpError(404, "Book not found"));
    }

    // Check Access
    const _req = req as AuthRequest;
    if (book.author.toString() !== _req.userId) {
        return next(createHttpError(403, "You can not update others book."));
    }
    // book-covers/dkzujeho0txi0yrfqjsm
    // https://res.cloudinary.com/degzfrkse/image/upload/v1712590372/book-covers/u4bt9x7sv0r0cg5cuynm.png

    const coverFileSplits = book.coverImage.split("/");
    const coverImagePublicId =
        coverFileSplits.at(-2) +
        "/" +
        coverFileSplits.at(-1)?.split(".").at(-2);

    const bookFileSplits = book.file.split("/");
    const bookFilePublicId =
        bookFileSplits.at(-2) + "/" + bookFileSplits.at(-1);
    console.log("bookFilePublicId", bookFilePublicId);
    // todo: add try error block
    await cloudinary.uploader.destroy(coverImagePublicId);
    await cloudinary.uploader.destroy(bookFilePublicId, {
        resource_type: "raw",
    });

    await bookModel.deleteOne({ _id: bookId });

    return res.sendStatus(204);
};
```

### update book

- put: or patch: http://localhost:5000/api/books/id

```js
// bookRouter.ts

bookRouter.patch(
  "/:bookId",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  updateBook
);
```

```js
// bookController.ts

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, genre } = req.body;
    const bookId = req.params.bookId;

    const book = await bookModel.findOne({ _id: bookId });

    if (!book) {
        return next(createHttpError(404, "Book not found"));
    }
    // Check access
    const _req = req as AuthRequest;
    if (book.author.toString() !== _req.userId) {
        return next(createHttpError(403, "You can not update others book."));
    }

    // check if image field is exists.

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    let completeCoverImage = "";
    if (files.coverImage) {
        const filename = files.coverImage[0].filename;
        const converMimeType = files.coverImage[0].mimetype.split("/").at(-1);
        // send files to cloudinary
        const filePath = path.resolve(
            __dirname,
            "../../public/data/uploads/" + filename
        );
        completeCoverImage = filename;
        const uploadResult = await cloudinary.uploader.upload(filePath, {
            filename_override: completeCoverImage,
            folder: "book-covers",
            format: converMimeType,
        });

        completeCoverImage = uploadResult.secure_url;
        await fs.promises.unlink(filePath);
    }

    // check if file field is exists.
    let completeFileName = "";
    if (files.file) {
        const bookFilePath = path.resolve(
            __dirname,
            "../../public/data/uploads/" + files.file[0].filename
        );

        const bookFileName = files.file[0].filename;
        completeFileName = bookFileName;

        const uploadResultPdf = await cloudinary.uploader.upload(bookFilePath, {
            resource_type: "raw",
            filename_override: completeFileName,
            folder: "book-pdfs",
            format: "pdf",
        });

        completeFileName = uploadResultPdf.secure_url;
        await fs.promises.unlink(bookFilePath);
    }

    const updatedBook = await bookModel.findOneAndUpdate(
        {
            _id: bookId,
        },
        {
            title: title,
            description: description,
            genre: genre,
            coverImage: completeCoverImage
                ? completeCoverImage
                : book.coverImage,
            file: completeFileName ? completeFileName : book.file,
        },
        { new: true }
    );

    return res.json(updatedBook);
};

```
