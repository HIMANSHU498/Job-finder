import React, { useState } from "react";
import "./Register.css";

import registerBanner from "./../../assets/wallpaper (2).png";
import axios from "axios";
const Register = () => {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [error, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const Validation = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "*name is required";
    }
    if (!values.password) {
      errors.password = "*password is required";
    }
    if (!values.email) {
      errors.email = "*email is required";
    }
    if (!values.mobile) {
      errors.mobile = "*mobile is required";
    }
    if (!values.check) {
      errors.check = "*please accept the terms and conditions";
    }
    return errors;
  };
  const dataSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = response.data;
      alert(responseData.error);
      window.localStorage.setItem("user", responseData.email);
      window.localStorage.setItem("name", responseData.name);
      window.localStorage.setItem("token", responseData.jwtToken);
    } catch (error) {
      // if (error.response) {
      //   // User already exists
      //   alert(error.response);
      // } else {
      //   console.log("An error occurred during registration");
      // }
    }
  };
  return (
    <>
      <div className="registerpage-container">
        <div className="register-box">
          <div className="register-content">
            <div className="register-heading1">Create an account</div>
            <div className="register-heading2">
              Your personal job finder is here
            </div>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="user-input"
                value={data.name}
                onChange={handleChange}
              />
              <p>{error.name}</p>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="user-input"
                value={data.email}
                onChange={handleChange}
              />
              <p>{error.email}</p>
              <input
                type="number"
                name="mobile"
                placeholder="Mobile"
                className="user-input"
                value={data.mobile}
                onChange={handleChange}
              />
              <p>{error.number}</p>
              <input
                type="text"
                placeholder="Password"
                name="password"
                className="user-input"
                value={data.password}
                onChange={handleChange}
              />{" "}
              <p>{error.password}</p>
              <label>
                <input type="checkbox" />
                <span>
                  By creating an account, I agree to our terms of use and
                  privacy policy
                </span>
              </label>
              <p>{error.check}</p>
              <button className="register-btn" onClick={dataSubmit}>
                Create Account
              </button>
            </form>
            <span>Already have an account?</span> &nbsp;
            <span className="signup-btn">Sign In</span>
          </div>
        </div>
        <div className="register-banner">
          <img src={registerBanner} alt="registerbanner" />
          <div className="banner-title">Your Personal Job Finder</div>
        </div>
      </div>
    </>
  );
};

export default Register;
