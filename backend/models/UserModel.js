const mongoose = require("mongoose");

const UserShema = new mongoose.Schema(
  {
    name: String,
    email: String,
    number: Number,
    password: String,
    message: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
    // like: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }],
    // followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Followers" }],
    // following: [{ type: mongoose.Schema.Types.ObjectId, ref: "Following" }],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserShema);

// const UserTest = new UserModel({
//   name: "Ibra",
//   email: "ibrajht@gmail.com",
//   number: "07595609",
//   password: "azerty",
//   message: "63489a53c324dbe59e98b6c8",
// });

// UserTest.save();

module.exports = UserModel;
