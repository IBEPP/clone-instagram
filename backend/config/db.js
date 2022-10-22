const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGO_DB_URL}`);

try {
  console.log("Succes Full");
} catch (err) {
  console.log("Error server " + err);
}
