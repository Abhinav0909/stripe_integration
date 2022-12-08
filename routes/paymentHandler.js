const express = require("express");
const PaymentRouter = express();
const dotenv = require("dotenv");
dotenv.config();
const publishable_key = process.env.PUBLISHABLE_KEY;
const secret_key = process.env.SECRET_KEY;
const stripe = require("stripe")(secret_key);
const PaymentViewHandler = (req, res) => {
  res.render("index", {
    key: publishable_key,
  });
};
const PaymentHandler = async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken,
      name: "Abhinav",
    });
    const charges = await stripe.charges.create({
      amount: 1000,
      description: "Payment Gateway",
      currency: "INR",
      customer: customer.id,
    });
    console.log(charges);
    res.send("Payment has been done successfully");
  } catch (err) {
    res.send(err);
  }
};
PaymentRouter.get("/payment", PaymentViewHandler);
PaymentRouter.post("/payments", PaymentHandler);
module.exports = PaymentRouter;
