import { PostJob } from "../Schema/model.js";

export let createJob = async (req, res) => {
  try {
    let data = req.body;
    let result = await PostJob.create(data);
    console.log(result);
    res.status(200).json({
      success: true,
      message: "Job posted successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readJob = async (req, res) => {
  try {
    let result = await PostJob.find({});
    res.json({
      success: true,
      message: "Job read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let myJob = async (req, res, next) => {
  let email = req.params.email;
  console.log(email);
  const jobs = await PostJob.find({ postedBy: email });
  res.send(jobs);
};

export let updateJob = async (req, res) => {
  let id = req.params.id;
  let data = req.body;

  try {
    let result = await PostJob.findByIdAndUpdate(id, data);
    res.json({
      success: true,
      message: "Product updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteProduct = async (req, res) => {
  let productId = req.params.productId;

  try {
    let result = await Product.findByIdAndDelete(productId);
    res.json({
      success: true,
      message: "Product deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteJob = async (req, res, next) => {
  let id = req.params.id;

  try {
    let result = await PostJob.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Job deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
