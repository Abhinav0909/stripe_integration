const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const FormRouter = require("./routes/formHandler");
const PaymentRouter = require("./routes/paymentHandler");
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Error connecting to db");
    } else {
      console.log("Connected to db successfully");
    }
  }
);
app.set("view engine", "ejs");
app.use(FormRouter);
app.use(PaymentRouter);
app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});
