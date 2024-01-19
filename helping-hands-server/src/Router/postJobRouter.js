import { Router } from "express";
import {
  createJob,
  deleteJob,
  myJob,
  readJob,
  updateJob,
} from "../Controller/postJobController.js";

let postJobRouter = Router();

postJobRouter.route("/").post(createJob).get(readJob);
postJobRouter.route("/:id").patch(updateJob).delete(deleteJob);

postJobRouter.route("/myJobs/:email").get(myJob);

export default postJobRouter;
