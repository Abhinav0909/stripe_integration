const express = require("express");
const Forms = require("../model");
const FormRouter = express();
const ViewHandler = (req, res) => {
  res.render("home");
};
const RegisterHandler = async (req, res) => {
  try {
    const value = await new Forms(req.body).save();
    console.log(value);
    return res.send("Submitted the form");
  } catch (err) {
    console.log(err);
  }
};
FormRouter.get("/", ViewHandler);
FormRouter.post("/register", RegisterHandler);

module.exports = FormRouter;
