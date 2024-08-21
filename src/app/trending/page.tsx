import React from "react";
import ImgMediaCard from "../components/muiCard";
// import muiCard from ''
import "./page.css";
const page = () => {
  return (
    <div className="jobs">
      <h1>Trending Jobs</h1>
      <h2>Jobs</h2>
      <div className="job-cards">
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </div>
      <div className="languages">
        <h2>Languages</h2>
        <div className="job-cards">
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
        </div>
      </div>
    </div>
  );
};

export default page;
