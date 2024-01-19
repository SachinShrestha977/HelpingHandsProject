import { model } from "mongoose";
import postJob from "./postJob.js";
import userSchema from "./userSchema.js";

export let PostJob = model("PostJob", postJob);
export let User = model("User", userSchema);
