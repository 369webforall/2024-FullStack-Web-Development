import express from "express";
import multer from "multer";

import path from "node:path";

import {
  createBook,
  listBooks,
  getSingleBook,
  deleteBook,
  updateBook,
} from "./bookController";
import authenticate from "../config/authenticate";

const bookRouter = express.Router();

const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  // todo: put limit 10mb max.
  limits: { fileSize: 10 * 1024 * 1024 }, // 10mb 1 0 * 1024 * 1024
});

bookRouter.post(
  "/",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createBook
);
// http://localhost:5000/api/books
bookRouter.get("/", listBooks);

//get single book
// http://localhost:5000/api/books/6683aaa3f12432a53114ba72

bookRouter.get("/:bookId", getSingleBook);

// delete route
// http://localhost:5000/api/books/6683aaa3f12432a53114ba72

bookRouter.delete("/:bookId", authenticate, deleteBook);

// update book
// http://localhost:5000/api/books/6683aaa3f12432a53114ba72

bookRouter.patch(
  "/:bookId",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  updateBook
);

export default bookRouter;
