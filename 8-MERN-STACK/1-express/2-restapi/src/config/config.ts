import { config } from "dotenv";
config();

const configVal = {
  port: process.env.PORT,
  dbString: process.env.MONGODB_CONNECTION_STRING,
  env: process.env.NODE_ENV,
};

export const configFile = Object.freeze(configVal);
