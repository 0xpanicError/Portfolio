import React from "react";
import Navbar from "../components/Navbar";
import Articles from "../components/ArticlesList";
import styles from "../styles/Page.module.css";

function Article() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Articles</h1>
      <Articles />
    </div>
  );
}

export default Article;
