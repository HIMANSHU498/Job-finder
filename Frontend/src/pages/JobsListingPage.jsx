import React from "react";
import JobsListing from "../components/Jobs listing/JobsListing";
import Navbar from "../components/Navbar/Navbar";

const JobsListingPage = () => {
  return (
    <div>
      <Navbar />
      <JobsListing />
    </div>
  );
};

export default JobsListingPage;
