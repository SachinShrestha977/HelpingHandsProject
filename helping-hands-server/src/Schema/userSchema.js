import { Schema } from "mongoose";

let userSchema = Schema({
  fullName: {
    type: String,
    required: [true, "fullName is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  role: {
    type: String,
  },
  isVerifiedEmail: {
    type: Boolean,
  },
});

export default userSchema;
