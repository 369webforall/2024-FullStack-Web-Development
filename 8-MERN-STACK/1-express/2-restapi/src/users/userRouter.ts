import express from "express";
import { createUser, loginUser } from "./userController";

const userRouter = express.Router();

// http://locahost:5000/api/user/register
// http://locahost:5000/api/user/login
userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);

export default userRouter;
