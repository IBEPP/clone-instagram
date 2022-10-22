const MessageModel = require("../models/MessageModel");
const UserModel = require("../models/UserModel");

module.exports.getMessage = (req, res, nex) => {
  MessageModel.find()
    .exec()
    .then((response) => {
      res.status(200).json({ response });
    });
};

module.exports.postMessage = async (req, res, next) => {
  //   console.log("voici req.body >>>>>>> " + req.body.email);
  const userId = req.params.userId;
  await UserModel.findById(userId).then((result) => {
    if (result) {
      const { text } = req.body;
      MessageModel.create({ text }).then((messageId) => {
        res.status(200).json({ messageId });
        UserModel.findByIdAndUpdate(
          userId,
          { $addToSet: { message: messageId._id } },
          { new: true, upsert: true },
          (err, docs) => {
            if (!err) res.status(201).json(docs);
            else return res.status(400).json(err);
          }
        );
      });
    }
  });

  // .then((response) => {
  //   res.status(201).json({ response });
  //   console.log({ parfait: response });
  // })
  // .catch((err) => {
  //   res.status(401).json({ err });
  //   console.log({ failed: err });
  // });
};
