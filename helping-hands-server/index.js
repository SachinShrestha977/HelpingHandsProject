import cors from "cors";
import express, { json } from "express";
import employeeRouter from "./src/Router/employeeRouter.js";
import postJobRouter from "./src/Router/postJobRouter.js";
import { port } from "./src/config.js";
import connectToMongoDB from "./src/databaseConnection/mongoDBConnection.js";
import employerRouter from "./src/Router/employerRouter.js";
let expressApp = express();
expressApp.use(json()); // Always place this code at top of the router
expressApp.use(cors());
expressApp.listen(port, () => {
  console.log(`Express app is listening at port ${port}`);
});

connectToMongoDB();

expressApp.use("/", postJobRouter);
expressApp.use("/employee", employeeRouter);
expressApp.use("/employer", employerRouter);
