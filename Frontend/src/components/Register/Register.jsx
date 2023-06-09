import React from "react";
import "./Register.css";
import registerBanner from "./../../assets/wallpaper (2).png";
const Register = () => {
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
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="user-input"
              />
              <input
                type="number"
                name="mobile"
                placeholder="Mobile"
                className="user-input"
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                className="user-input"
              />{" "}
              <label>
                <input type="checkbox" />
                <span>
                  By creating an account, I agree to our terms of use and
                  privacy policy
                </span>
              </label>
              <button className="register-btn">Create Account</button>
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
