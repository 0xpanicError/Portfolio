import React from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import styles from "../styles/Page.module.css";

function Projects() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.projectTitle}>
        <h1>Projects </h1>
      </div>
      <div className={styles.projectBody}>
        <Project />
      </div>
    </div>
  );
}

export default Projects;
