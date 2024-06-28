import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { User } from "./userTypes";
import Jwt from "jsonwebtoken";
import { configFile } from "../config/config";
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  //validation
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }

  // database call - to check for existance of the user

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
    const error = createHttpError(500, "Error while getting user");
    return next(error);
  }

  // hash password npm i bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  let newUser: User;

  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    return next(createHttpError(500, "Error while creating user."));
  }

  // Token generation JWT

  try {
    const token = Jwt.sign(
      { sub: newUser._id },
      configFile.jwtSecret as string,
      {
        expiresIn: "7d",
        algorithm: "HS256",
      }
    );

    res.status(201).json({ accessToken: token });
  } catch (error) {
    return next(createHttpError(500, "Error while signing the jwt token"));
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }
  // todo: wrap in try catch.

  const user = await userModel.findOne({ email });
  if (!user) {
    return next(createHttpError(400, "Username or password incorrect!"));
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(createHttpError(400, "Username or password incorrect!"));
  }

  // Create accesstoken

  const token = Jwt.sign({ sub: user._id }, configFile.jwtSecret as string, {
    expiresIn: "7d",
    algorithm: "HS256",
  });

  res.json({ accessToken: token });
};

export { createUser, loginUser };
