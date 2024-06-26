import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import { configFile } from "../config/config";
const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    message: err.message,
    errorStack: configFile.env === "development" ? err.stack : "",
  });
};

export default globalErrorHandler;
