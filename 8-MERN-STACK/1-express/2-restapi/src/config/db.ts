import mongoose from "mongoose";
import { configFile } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to datbase sucessfully");
    });
    mongoose.connection.on("error", (err) => {
      console.log("Error in connectiong database", err);
    });
    await mongoose.connect(configFile.dbString as string);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
