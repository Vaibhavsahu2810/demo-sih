import React from "react";
import ImgMediaCard from "@/app/components/muiCard";
// import muiCard from ''
import "./page.css";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
const page = () => {
  return (
    <div>
      <Navbar/>
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
    <Footer/>
    </div>
  );
};

export default page;
