const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/Users");
const jobDetails = require("./models/JobDetails");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
dotenv.config();
app.use(express.json());
app.get("/healthstatus", (req, resp) => {
  resp.send("Website working fine");
});
app.post("/register", async (req, resp) => {
  try {
    const { name, email, mobile, password } = req.body;
    if (!name || !email || !password || !mobile) {
      return resp.json("All fields are required");
    }
    const alreadyUser = await User.findOne({ email });
    if (alreadyUser) {
      return resp.json({ error: "User already exists" });
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const userData = new User({
      name,
      email,
      password: encryptedPassword,
      mobile,
    });
    const savedUser = await userData.save();
    const jwtToken = jwt.sign({ email }, process.env.SECRET_KEY);
    resp.json({ savedUser, jwtToken });
  } catch (error) {
    resp.send({ error: "Something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json("All fields are required");
    }
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      const checkPassword = await bcrypt.compare(password, checkEmail.password);
      if (checkPassword) {
        const jwtToken = jwt.sign({ email }, process.env.SECRET_KEY);
        return res.json({ message: "User logged in successfully", jwtToken });
      }
    }
    return res.json({ message: "Invalid credentials" });
  } catch (error) {
    return res.json({ error: "" });
  }
});
app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB server running successfully"))
    .catch((err) => console.log(err));
  console.log("Server running successfully");
});
