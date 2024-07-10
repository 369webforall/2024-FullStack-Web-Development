import express, { json } from "express";
import cors from "cors";
import { PORT, DATABASE_URL } from "./config.js";
import bookRouter from "./routes/bookRoute.js";
import mongoose from "mongoose";

const app = express();

// app.use(cors()); // cross platform communication is allowed default way
// 2.allow custom origin

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json()); // to format json data
app.use("/books", bookRouter);
mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("Mongo db connected");
    app.listen(PORT, (req, res) => {
      console.log("Server is running in port", PORT);
    });
  })
  .catch((error) => console.log(error));
