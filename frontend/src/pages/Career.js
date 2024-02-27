import React from "react";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import pageStyles from "../styles/Page.module.css";

function Career() {
  return (
    <div className={pageStyles.container}>
      <Navbar />
      <div className={pageStyles.projectTitle}>
        <h1>Career</h1>
      </div>
      <div className={pageStyles.projectBody}>
        <Experience />
      </div>
    </div>
  );
}

export default Career;
