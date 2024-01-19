import { Router } from "express";
import {
  createUser,
  loginUser,
  verifyEmail,
} from "../Controller/employeeController.js";

let employeeRouter = Router();

employeeRouter.route("/").post(createUser);
employeeRouter.route("/verify-email").patch(verifyEmail);
employeeRouter.route("/login").post(loginUser);

export default employeeRouter;
