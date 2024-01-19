import { model } from "mongoose";
import employeeSchema from "./employeeSchema.js";
import postJob from "./postJob.js";
import employerSchema from "./employerSchema.js";

export let PostJob = model("PostJob", postJob);
export let Employee = model("Employee", employeeSchema);
export let Employer = model("Employer", employerSchema);
