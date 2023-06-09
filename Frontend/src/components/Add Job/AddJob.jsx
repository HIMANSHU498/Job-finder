import React from "react";
import "./AddJob.css";
import JobBanner from "./../../assets/wallpaper (1).png";
const AddJob = () => {
  return (
    <>
      <div className="addjobpage-container">
        <div className="addjob-box">
          <div className="addjob-content">
            <div className="addjob-heading1">Add job description</div>
            <form>
              <div className="jobform-box">
                <label>Company Name </label>
                <input
                  type="text"
                  name="companyname"
                  placeholder="Enter your company name here"
                  className="addjob-input"
                />
              </div>
              <div className="jobform-box">
                <label>Add Logo URL</label>{" "}
                <input
                  type="text"
                  name="logo-url"
                  placeholder="Enter the link"
                  className="addjob-input "
                />
              </div>
              <div className="jobform-box">
                <label>Job position</label>{" "}
                <input
                  type="text"
                  name="job-position"
                  placeholder="Enter job position"
                  className="addjob-input"
                />
              </div>
              <div className="jobform-box">
                <label>Monthly salary</label>{" "}
                <input
                  type="text"
                  name="monthly-salary"
                  placeholder="Enter Amount in rupees"
                  className="addjob-input"
                />
              </div>
              <div className="jobform-box">
                <label>Job Type</label>{" "}
                <select className="addjob-input option-input">
                  <option value="" defaultValue>
                    Select
                  </option>
                  <option value="parttime">Part time</option>
                  <option value="fulltime">Full time</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              <div className="jobform-box ">
                <label>Remote/office</label>{" "}
                <select className="addjob-input option-input">
                  <option value="" defaultValue>
                    Select
                  </option>
                  <option value="remote">Remote</option>
                  <option value="office">Office</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              <div className="jobform-box">
                <label>Location</label>{" "}
                <input
                  type="text"
                  name="location"
                  placeholder="Enter Location"
                  className="addjob-input"
                />
              </div>
              <div className="jobform-box">
                <label>Job Description</label>{" "}
                <textarea
                  type="text"
                  name="job-description"
                  placeholder="Type the job description"
                  className="addjob-input"
                  style={{ height: "10vh" }}
                />
              </div>
              <div className="jobform-box">
                <label>About Company</label>{" "}
                <textarea
                  type="text"
                  name="about-company"
                  placeholder="Type about your company"
                  className="addjob-input"
                  style={{ height: "10vh" }}
                />
              </div>
              <div className="jobform-box">
                <label>Skills Required</label>{" "}
                <input
                  type="text"
                  name="skills-required"
                  placeholder="Enter the must have skills"
                  className="addjob-input"
                />
              </div>
              <div className="addjob-btn-container">
                <button className="canceljob-btn">Cancel</button>
                <button className="addjob-btn">Add Job</button>
              </div>
            </form>
          </div>
        </div>
        <div className="addjob-banner">
          <img src={JobBanner} alt="Job-banner" />
          <div className="banner-title">Recruiter add job details here</div>
        </div>
      </div>
    </>
  );
};

export default AddJob;
