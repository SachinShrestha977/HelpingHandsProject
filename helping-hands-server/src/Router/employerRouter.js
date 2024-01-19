import { Router } from "express";
import {
  createUser,
  loginUser,
  verifyEmail,
} from "../Controller/employerController.js";

let employerRouter = Router();

employerRouter.route("/").post(createUser);
employerRouter.route("/verify-email").patch(verifyEmail);
employerRouter.route("/login").post(loginUser);

export default employerRouter;
