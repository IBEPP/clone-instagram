const mongoose = require("mongoose");

const MessageShema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: String,
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("Message", MessageShema);

// const MessageTest = new MessageModel({
//   title: "Ibra trkl",
//   userId: "63475668be9c025bb10af6e1",
// });

// MessageTest.save();

module.exports = MessageModel;
