import React from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import styles from "../styles/Page.module.css";

function Projects() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Projects</h1>
      <Project />
    </div>
  );
}

export default Projects;
