import { Schema } from "mongoose";

let postJob = Schema({
  jobTitle: {
    type: String,
    required: [true, "jobTitle field is necessary"],
  },
  employmentType: {
    type: String,
    required: [true, "employmentType field is necessary"],
  },
  minPrice: {
    type: Number,
    required: [true, "minPrice field is necessary"],
  },
  maxPrice: {
    type: Number,
    required: [true, "maxPrice field is necessary"],
  },
  salaryType: {
    type: String,
    required: [true, "salaryType field is necessary"],
  },
  jobLocation: {
    type: String,
    required: [true, "jobLocation field is necessary"],
  },
  postingDate: {
    type: Date,
    required: [true, "postingDate field is necessary"],
  },
  experienceLevel: {
    type: String,
    required: [true, "experienceLevel field is necessary"],
  },
  description: {
    type: String,
    required: [true, "description field is necessary"],
  },
  postedBy: {
    type: String,
    required: [true, "postedBy field is necessary"],
  },
  experienceLevel: {
    type: String,
    required: [true, "experienceLevel field is necessary"],
  },
});

export default postJob;
