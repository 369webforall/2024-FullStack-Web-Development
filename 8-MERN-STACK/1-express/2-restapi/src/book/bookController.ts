import { Request, Response, NextFunction } from "express";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  res.send({ book: "This isnew book" });
};

export { createBook };
