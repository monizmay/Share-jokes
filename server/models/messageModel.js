const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Your username is required"],
      },
      title: {
        type: String,
        required: [true, "Title is required"],
      },
      message: {
        type: String,
        required: [true, "Your message is required"],
      },
});

module.exports = mongoose.model("Messages", userSchema);