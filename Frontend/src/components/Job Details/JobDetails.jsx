import React from "react";
import "./JobDetails.css";
const JobDetails = () => {
  return (
    <>
      <div className="jobdetails-container">
        <div className="jobdetails-title-box">
          WordPress Development work from home job/internship at Adyaka Infosec
          Private Limited
        </div>
        <div className="jobdetails-box">
          <div style={{ display: "flex" }}>
            <div>
              <div className="jobdetail-jobtype">1w ago . Full Time</div>
              <div className="jobdetail-jobrole">Frontend Developer</div>
              <div className="jobdetail-location">Bangalore | India</div>
              <br />
              <div className="jobdetail-stipendbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#999999" }}>💸 Stipend</span>
                  <span>Rs 25000/month</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#999999" }}>📅Duration</span>
                  <span>6 Months</span>
                </div>
              </div>
            </div>
            <button className="jobdetail-edit-btn">Edit job</button>
          </div>
          <div className="about-company">About Company</div>
          <span className="jobdetails-text">
            We provide technology-based services to help businesses and
            organizations achieve their goals. We offer a wide range of
            services, including software development, system integration,
            network and security services, cloud computing, and data analytics.
            Our primary focus is on leveraging technology to streamline business
            processes, improve productivity, and enhance overall efficiency.
          </span>
          <div className="about-company">About the job/internship</div>
          <span className="jobdetails-text">
            We are looking for a responsible PHP/WordPress/Laravel/Shopify
            Developer. He/She will be liable for managing services and therefore
            the interchange of knowledge between the server and the users. The
            candidate's primary focus is going to be the event of all
            server-side logic, definition, and maintenance of the central
            database and ensuring high performance and responsiveness to
            requests from the front end. Selected intern's day-to-day
            responsibilities include: 1. Work on the development of theme
            customization, liquid programming language, and corresponding apps
            2. Implement system integrations that are crucial to our success 3.
            Contribute to the development of HTML5/CSS/JavaScript and standard
            web technologies integral to building seamless multi-channel
            experiences 4. Work on speed optimization and making a
            mobile-friendly website
          </span>
          <div className="skills-required">Skill(s) required</div>
          <div className="skills-required-box ">
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
          </div>
          <div className="about-company">Additional Information</div>
          <span className="jobdetails-text">
            Stipend structure: This is a performance-based internship. In
            addition to the minimum-assured stipend, you will also be paid a
            performance-linked incentive (₹ 2500 per design).
          </span>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
