import { config } from "dotenv";
config();

const configVal = {
  port: process.env.PORT,
  dbString: process.env.MONGODB_CONNECTION_STRING,
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET,
};

export const configFile = Object.freeze(configVal);
