import React from "react";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import styles from "../styles/Page.module.css";

function Career() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.projectTitle}>
        <h1>Career</h1>
      </div>
      <div className={styles.projectBody}>
        <Experience />
      </div>
    </div>
  );
}

export default Career;
