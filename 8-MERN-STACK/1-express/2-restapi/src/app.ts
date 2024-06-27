import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import createHttpError from "http-errors";
import userRouter from "./users/userRouter";
const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  // //   throw new Error("Something went wrong in server");
  // const error = createHttpError(401, "This is the new error message");
  // throw error;
  res.send({ name: "dev" });
});

app.use("/api/users", userRouter);

app.use(globalErrorHandler);

export default app;
