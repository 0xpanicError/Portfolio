import React from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import styles from "../styles/Projects.module.css";

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.pageBody}>
        <div className={styles.projectTitle}>
          <h1>Projects </h1>
        </div>
        <div className={styles.projectBody}>
          <Project />
        </div>
      </div>
    </div>
  );
}

export default Projects;
