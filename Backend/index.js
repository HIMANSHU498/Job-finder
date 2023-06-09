const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
app.get("", (req, resp) => {
  resp.send("all good");
});
app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB server running successfully"))
    .catch((err) => console.log(err));
  console.log("Server running successfully");
});
