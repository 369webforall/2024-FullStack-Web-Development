import express from "express";
import multer from "multer";

import path from "node:path";

import { createBook } from "./bookController";
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

export default bookRouter;
