import { Request, Response, NextFunction } from "express";
import bookModel from "./bookModel";
import path from "node:path";
import fs from "node:fs";
import cloudinary from "../config/cloudinary";
import createHttpError from "http-errors";
import { AuthRequest } from "../config/authenticate";
const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const { title, genre, description } = req.body;
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  // console.log(files);

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
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Error while uploading the files."));
  }
};

export { createBook };
