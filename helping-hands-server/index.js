import cors from "cors";
import express, { json } from "express";
import connectToMongoDB from "./src/databaseConnection/mongoDBConnection.js";
import { port } from "./src/config.js";
import postJobRouter from "./src/Router/postJobRouter.js";
let expressApp = express();
expressApp.use(json()); // Always place this code at top of the router
expressApp.use(cors());
expressApp.listen(port, () => {
  console.log(`Express app is listening at port ${port}`);
});

connectToMongoDB();

expressApp.use("/", postJobRouter);
