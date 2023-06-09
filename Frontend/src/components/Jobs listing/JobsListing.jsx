import React from "react";
import "./JobsListing.css";
import icon from "./../../assets/icon.png";
const JobsListing = () => {
  return (
    <>
      <div className="joblisting-container">
        <div className="searchbar-container">
          <input
            type="text"
            className="jobs-searchbar"
            placeholder="Type any job title"
          />
          <div className="skills-box">
            <div className="search-skills">
              <select id="" className="skills-btn">
                <option value="skills" defaultChecked>
                  Skills
                </option>
                <option value="frontend">Frontend</option>
                <option value="html">HTML</option>
                <option value="javascript">Javascript</option>
                <option value="css">CSS</option>
              </select>
              <div className="selected-skills-container">
                <span className="selected-skills">
                  <div>Frontend</div> <span>X</span>
                </span>
                <span className="selected-skills">
                  <div>Frontend</div> <span>X</span>
                </span>
              </div>
            </div>
            <div className="clear-btn">Clear</div>
            <button className="listjob-btn">+Add Job</button>
          </div>
        </div>
        <div className="jobpost-container">
          <div className="leftside-content">
            <img src={icon} alt="" />
            <div style={{ marginTop: "20px" }}>
              <div className="jobrole"> Frontend developer</div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  color: "#9C9C9C",
                  marginBottom: "10px",
                }}
              >
                <span>11-50</span>
                <span>&#8377; 15000</span>
                <span> Delhi</span>
              </div>
              <div style={{ display: "flex", gap: "1rem", color: "#ff6b6b" }}>
                <span>Office</span>
                <span>Fulltime</span>
              </div>
            </div>
          </div>
          <div className="rightside-content">
            <span>
              <div className="jobpost-skills">Frontend</div>
              <div className="jobpost-skills">Backend</div>
              <div className="jobpost-skills">Frontend</div>
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >
              <button className="editjob-btn">Edit job</button>
              <button className="view-btn">View details</button>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default JobsListing;
