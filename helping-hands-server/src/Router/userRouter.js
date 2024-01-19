import { Router } from "express";

import {
  createUser,
  loginUser,
  verifyEmail,
} from "../Controller/userController.js";

let userRouter = Router();

userRouter.route("/").post(createUser);
userRouter.route("/verify-email").patch(verifyEmail);
userRouter.route("/login").post(loginUser);

export default userRouter;
