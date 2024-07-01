import { v2 as cloudinary } from "cloudinary";
import { configFile } from "./config";

cloudinary.config({
  cloud_name: configFile.cloudName,
  api_key: configFile.cloudApi,
  api_secret: configFile.cloudSecret,
});

export default cloudinary;
