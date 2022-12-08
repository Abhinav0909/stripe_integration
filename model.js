const mongoose = require("mongoose");
const schema = mongoose.Schema;
const formSchema = new schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const Forms = mongoose.model("Forms", formSchema);
module.exports = Forms;
