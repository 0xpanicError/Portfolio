import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Page.module.css";

function Projects() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Projects</h1>
      {/* Replace with your actual content */}
      <p>Here are some of my projects...</p>
    </div>
  );
}

export default Projects;
