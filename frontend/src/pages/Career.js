import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Career.module.css";
import Experience from "../components/Experience";

function Career() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.pageBody}>
        <div className={styles.careerTitle}>
          <h1>Career</h1>
        </div>
        <div className={styles.careerBody}>
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default Career;
