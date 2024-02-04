import React from "react";
import Navbar from "../components/Navbar";
import Articles from "../components/ArticlesList";
import styles from "../styles/Page.module.css";

function Article() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.projectTitle}>
        <h1>Articles</h1>
      </div>
      <Articles />
    </div>
  );
}

export default Article;
