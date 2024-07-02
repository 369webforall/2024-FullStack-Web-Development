import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { verify } from "jsonwebtoken";
import { configFile } from "./config";

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
    console.log(parsedToken);
    const decoded = verify(parsedToken, configFile.jwtSecret as string);
    const _req = req as AuthRequest;
    _req.userId = decoded.sub as string;

    next();
  } catch (err) {
    return next(createHttpError(401, "Token expired."));
  }
};

export default authenticate;
