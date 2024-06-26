import app from "./src/app";
import { configFile } from "./src/config/config";
import connectDB from "./src/config/db";

const startServer = () => {
  const PORT = configFile.port || 3002;
  connectDB();
  app.listen(PORT, () => {
    console.log("server is running in port", PORT);
  });
};

startServer();
