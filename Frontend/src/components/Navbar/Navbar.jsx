import React from "react";
import "./Navbar.css";
import Rectangle1 from "./../../assets/Rectangle 2.png";
import Rectangle2 from "./../../assets/Rectangle 3.png";
import Rectangle3 from "./../../assets/Rectangle 4.png";
import Rectangle4 from "./../../assets/wallpaper (1).png";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h2 className="navbar-title">Job Finder</h2>
        <img src={Rectangle1} alt="" className="rectangle1" />
        <img src={Rectangle2} alt="" className="rectangle2" />
        <img src={Rectangle3} alt="" className="rectangle3" />
        <div className="navbar-btn-container">
          {/* <button className="navbar-btn">Login</button>
          <button
            className="navbar-btn"
            style={{ background: "white", color: "#ED5353" }}
          >
            Register
          </button> */}
          <div className="logout">Logout</div>
          <div className="userid">Hello hk</div>
          <img src={Rectangle4} alt="recruiter icon" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
