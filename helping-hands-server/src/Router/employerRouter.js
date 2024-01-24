import { Router } from "express";
import {
  createUser,
  loginUser,
  myProfile,
  verifyEmail,
} from "../Controller/employerController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

let employerRouter = Router();

employerRouter.route("/").post(createUser);
employerRouter.route("/verify-email").patch(verifyEmail);
employerRouter.route("/login").post(loginUser);
employerRouter.route("/my-profile").get(isAuthenticated, myProfile);

export default employerRouter;
