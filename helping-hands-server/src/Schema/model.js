import { model } from "mongoose";
import postJob from "./postJob.js";

export let PostJob = model("PostJob", postJob);
