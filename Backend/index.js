const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/Users");
const jobDetails = require("./models/JobDetails");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");

const IsAuthenticated = require("./middlewares/IsAuthenticated");
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  res.status(err.satus || 500);
  res.send({
    error: {
      status: err.satus || 500,
      message: err.message,
    },
  });
});

app.get("/", (req, resp) => {
  resp.json("Website running successfully");
});
app.post("/api/register", async (req, resp) => {
  try {
    const { name, email, mobile, password } = req.body;
    if (!name || !email || !password || !mobile) {
      return resp.json({ error: "All fields are required" });
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
    resp.json({
      success: "Successfully registered",
      jwtToken,
      name,
      email,
    });
  } catch (error) {
    resp.send({ error: "Something went wrong" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("Some fields are required");
    }
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      const checkPassword = await bcrypt.compare(password, checkEmail.password);
      if (checkPassword) {
        const jwtToken = jwt.sign({ email }, process.env.SECRET_KEY);
        return res
          .status(200)
          .json({ message: "User logged in successfully", jwtToken });
      }
    }
    return res.status(400).json({ message: "Invalid credentials" });
  } catch (error) {
    return res.json({ error: "" });
  }
});

app.post("/api/jobpost", IsAuthenticated, async (req, res) => {
  try {
    const {
      companyName,
      logoURL,
      jobPosition,
      salary,
      jobType,
      jobMode,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired,
    } = req.body;
    if (
      !companyName ||
      !logoURL ||
      !jobPosition ||
      !salary ||
      !jobType ||
      !jobMode ||
      !location ||
      !jobDescription ||
      !aboutCompany ||
      !skillsRequired
    ) {
      return res.status(401).json({ error: "All fields are required" });
    }
    const recruiterName = req.body.name;

    const skillsRequiredArray = skillsRequired
      .split(",")
      .map((skills) => skills.trim());
    console.log(recruiterName);
    const newJobPost = new jobDetails({
      companyName,
      logoURL,
      jobPosition,
      salary,
      jobType,
      jobMode,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired: skillsRequiredArray,
      recruiterName,
    });
    const result = await newJobPost.save();
    return res.json({
      message: "Job-post created successfully",
      recruiterName,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});
app.put("/api/jobpost/edit/:id", IsAuthenticated, async (req, res) => {
  const jobId = req.params.id;
  const {
    companyName,
    logoURL,
    jobPosition,
    salary,
    jobType,
    jobMode,
    location,
    jobDescription,
    aboutCompany,
    skillsRequired,
  } = req.body;
  const recruiterName = req.body.name;

  try {
    const updatedJobPost = await jobDetails.findByIdAndUpdate(
      jobId,
      {
        companyName,
        logoURL,
        jobPosition,
        salary,
        jobType,
        jobMode,
        location,
        jobDescription,
        aboutCompany,
        skillsRequired,
      },
      { new: true }
    );

    if (!updatedJobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }

    return res.json({
      message: "Job post updated successfully",
      recruiterName,
      updatedJobPost,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
});

app.get("/api/jobposts", async (req, resp) => {
  const { jobPosition, skillsRequired } = req.query;
  let filterData = {};

  if (jobPosition) {
    filterData.jobPosition = jobPosition;
  }

  if (skillsRequired) {
    filterData.skillsRequired = { $in: skillsRequired.split("&") };
  }

  const jobPosts = await jobDetails.find(query).sort({ createdAt: -1 });

  return resp.json({ jobPosts });
});
app.get("/api/jobposts/:id", async (req, resp) => {
  try {
    const jobId = req.params.id;
    const jobPost = await jobDetails.findById(jobId);

    if (!jobPost) {
      return resp.status(404).json({ message: "Job-post not found" });
    }

    return resp.json({ jobPost });
  } catch (err) {
    console.error(err);
    return resp.status(500).json({ message: "Internal server error" });
  }
});
app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB server running successfully"))
    .catch((err) => console.log(err));
  console.log("Server running successfully");
});
