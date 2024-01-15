import React from "react";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import styles from "../styles/Page.module.css";

function Career() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Career</h1>
      <Experience />
    </div>
  );
}

export default Career;
