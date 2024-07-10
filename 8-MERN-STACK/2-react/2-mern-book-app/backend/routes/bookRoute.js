import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router();

router.post("/", async (request, response) => {
  console.log("books post api");
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fileds: title, author, publishYear",
      });
    }

    const { title, author, publishYear } = request.body;
    const book = await Book.create({
      title,
      author,
      publishYear,
    });

    return response.status(201).send(book);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    if (!books) {
      return res.status(500).send({ message: "No book found" });
    }
    return res.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(500).send({ message: "No book found" });
    }
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong" });
  }
});

// update book

router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fileds: title, author, publishYear",
      });
    }
    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({
        message: "Book not found",
      });
    }

    return response.status(200).json({
      message: "Book updated successfully",
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: "Something went wrong" });
  }
});

// delete api

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({
        message: "Book not found",
      });
    }

    return response.status(200).json({
      message: "Book Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: "Something went wrong" });
  }
});

export default router;
