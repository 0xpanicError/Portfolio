import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Page.module.css";

function Articles() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Articles</h1>
      {/* Replace with your actual content */}
      <p>Here are some articles...</p>
    </div>
  );
}

export default Articles;
