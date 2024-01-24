import jwt from "jsonwebtoken";
import { secretKey } from "../config.js";

export let isAuthenticated = async (req, res, next) => {
  try {
    // get token from postman
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];
    //  verify token
    let user = await jwt.verify(token, secretKey);
    // get id from token
    req.id = user.id;
    next();
  } catch (error) {
    res.json({
      success: false,
      message: "Token not valid",
    });
  }
};
