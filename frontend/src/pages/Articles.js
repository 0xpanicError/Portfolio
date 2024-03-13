import React from "react";
import Navbar from "../components/Navbar";
import Articles from "../components/ArticlesList";
import styles from "../styles/Article.module.css";

function Article() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.pageBody}>
        <div className={styles.articleTitle}>
          <h1>Articles</h1>
        </div>
        <div className={styles.articleBody}>
          <Articles />
        </div>
      </div>
    </div>
  );
}

export default Article;
