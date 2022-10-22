require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { userRouter, messageRouter } = require("./router/indexRouter");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api", userRouter);
app.use("/api", messageRouter);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log("Server started in port >>> " + PORT));
