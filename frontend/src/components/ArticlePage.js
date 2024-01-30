import React from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar";
import styles from "../styles/Page.module.css";

const ArticlePage = (articles) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.projectList}>
        <h1>{articles.name}</h1>
        {articles.date}
        <div className={styles.description}>
          <ReactMarkdown>{articles.description}</ReactMarkdown>
        </div>
        <br />
      </div>
    </div>
  );
};

export default ArticlePage;
