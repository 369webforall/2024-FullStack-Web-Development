import { config } from "dotenv";
config();

const configVal = {
  port: process.env.PORT,
  dbString: process.env.MONGODB_CONNECTION_STRING,
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET,
  cloudName: process.env.CLOUDINARY_CLOUD,
  cloudApi: process.env.CLOUDINARY_API_KEY,
  cloudSecret: process.env.CLOUDINARY_API_SECRET,
};

export const configFile = Object.freeze(configVal);
