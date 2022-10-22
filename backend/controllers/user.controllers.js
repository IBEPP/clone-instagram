const UserModel = require("../models/UserModel");

module.exports.usersAll = async (req, res, next) => {
  UserModel.find()
    .exec()
    .then((response) => {
      res.status(200).json({ response });
    });
};

module.exports.userGetById = (req, res, next) => {
  const id = req.params.id;
  UserModel.findById(id)
    .populate("message")
    .exec()
    .then((response) => {
      res.status(200).json({ response });
    });
};

module.exports.userSignup = async (req, res, next) => {
  // console.log("voici res.locals >>>>>>> " + res.locals);

  const { name, email, number, password } = req.body;
  await UserModel.create({ name, email, number, password })
    .then((response) => {
      res.status(201).json({ response });
      console.log({ parfait: response });
    })
    .catch((err) => {
      res.status(401).json({ err });
      console.log({ failed: err });
    });
};

module.exports.userLogin = (req, res, next) => {
  const { email, number, password } = req.body;

  try {
    UserModel.find({ email, number, password })
      .exec()
      .then((response) => {
        if (response) {
          res.status(200).send(response);
        } else console.log("User not exits");
      })
      .catch((err) => {
        res.status(400).json({ err: err });
        console.log("User not exits" + err);
      });
  } catch (error) {
    res.status(400).json("User not exits" + error);
    console.log("User not exits" + error);
  }
};

module.exports.userPut = (req, res, next) => {
  const { name, email, number, password } = req.body;
  const id = req.params.id;

  UserModel.findByIdAndUpdate(
    id,
    { $set: { name, email, number, password } },
    { upsert: true, setDefaultsOnInsert: true }
  )
    .then((response) => res.status(200).json(response))
    .catch((err) => {
      res.status(400).json({ "Id not exits": err });
    });
};

module.exports.userDelete = (req, res, next) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .select("-password")
    .exec()
    .then((response) => {
      if (response)
        res.status(200).json({ "User successfully deleted": response });
      else res.status(400).json({ "id not recognized": id });
    })
    .catch((err) => {
      res.json({ "id not recognized": err });
    });
};
