import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secretKey } from "../config.js";
import { sendMail } from "../Utils/sendmail.js";
import { Employee, Employer } from "../Schema/model.js";

export let createUser = async (req, res, next) => {
  try {
    let data = req.body;
    let email = data.email;
    let password = data.password;
    let hashPassword = await bcrypt.hash(password, 10);
    data = {
      ...data,
      password: hashPassword,
      isVerifiedEmail: false,
    };
    let result = await Employer.create(data);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });

    // Sending Mail with link including token
    let infoObj = {
      _id: result._id,
    };
    let expiryInfo = {
      expiresIn: "100d",
    };

    let token = jwt.sign(infoObj, secretKey, expiryInfo);

    await sendMail({
      from: '"Sachin" <sachinstha977@gmail.com>',
      to: [data.email],
      subject: "Account Created",
      html: `<h1>You have successfully created your account<h1>

    <a href="http://localhost:5173/employerVerify-email?token=${token}">http://localhost:5173/employerVerify-email?token=${token}</a>`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let verifyEmail = async (req, res, next) => {
  try {
    // get token
    let tokenString = req.headers.authorization.split(" ")[1];
    //verify token
    let infoObj = await jwt.verify(tokenString, secretKey);
    // get _id from infoObj
    let userId = infoObj._id;

    let result = await Employer.findByIdAndUpdate(
      userId,
      {
        isVerifiedEmail: true,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "User verified successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let loginUser = async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  try {
    let user = await Employer.findOne({ email: email }); //checking if email exists or not
    // console.log(user)
    if (user === null) {
      res.status(400).json({
        success: false,
        message: "Email or password does not match.",
      });
    } else {
      let databasePassword = user.password;
      let isValidPassword = await bcrypt.compare(password, databasePassword);

      if (isValidPassword) {
        // generate token
        let infoObj = {
          id: user._id,
        };
        let expiryInfo = {
          expiresIn: "365d",
        };

        let token = jwt.sign(infoObj, secretKey, expiryInfo);

        res.status(200).json({
          success: true,
          message: "Login successful",
          data: user,
          token: token,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Email or password does not match",
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let myProfile = async (req, res, next) => {
  try {
    let id = req.id;
    console.log(id);
    let result = await Employer.findById(id);

    res.json({
      success: true,
      message: "Employer read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updateProfile = async (req, res, next) => {
  try {
    let id = req.id;
    console.log(id);
    let data = req.body;
    delete data.email;
    delete data.password;
    let result = await User.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updatePassword = async (req, res, next) => {
  try {
    let id = req.id;
    let data = req.body;
    let oldPassword = data.oldPassword;
    let newPassword = data.newPassword;
    let oldData = await User.findById(id);
    let hashPassword = oldData.password;
    let isValidPassword = await bcrypt.compare(oldPassword, hashPassword);
    if (isValidPassword) {
      let hashNewPassword = await bcrypt.hash(newPassword, 10);
      let result = await User.findByIdAndUpdate(
        id,
        { password: hashNewPassword },
        {
          new: true,
        }
      );
      res.json({
        success: true,
        message: "Password Updated Successfully",
        result: result,
      });
    } else {
      let error = new Error("Old Password doesn't match");
      throw error;
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllUser = async (req, res) => {
  try {
    let user = await User.find({});
    res.status(200).json({
      success: true,
      message: "User read successfully",
      result: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findById(id);
  res.json({
    success: true,
    message: "User read successfully",
    result: user,
  });
};

export let updateSpecificUser = async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  delete data.email;
  delete data.password;
  try {
    let result = await User.findByIdAndUpdate(id, data, { new: true });
    res.json({
      success: true,
      message: "User updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteSpecificUser = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await User.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "User deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let forgotPassword = async (req, res, next) => {
  try {
    let email = req.body.email;
    let result = await User.findOne({ email: email });
    if (result) {
      let infoObj = {
        id: result._id,
      };
      let expiryInfo = {
        expiresIn: "365d",
      };

      let token = jwt.sign(infoObj, secretKey, expiryInfo);
      await sendMail({
        from: '"Sachin" <sachinstha977@gmail.com>',
        to: email,
        subject: "Reset Password",
        html: `<h1>Click the given link to reset your password<h1>
  
      <a href="http://localhost:3000/reset-password?token=${token}">http://localhost:3000/reset-password?token=${token}</a>`,
      });
      res.status(200).json({
        success: true,
        message: "Reset password link has been sent to the mail",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Email doesn't exist",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let resetPassword = async (req, res, next) => {
  try {
    let id = req.id;
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    let result = await User.findByIdAndUpdate(
      id,
      { password: hashPassword },
      { new: true }
    );
    res.status(201).json({
      success: true,
      message: "Password has been reset successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteProfile = () => {};
