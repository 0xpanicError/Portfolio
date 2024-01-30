import React from "react";
import styles from "../styles/Articles.module.css";
import ArticleCard from "./Card";

const Articles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectList}>
        <ArticleCard
          slug={"merklesumtree"}
          name={"Merkle Sum Tree"}
          description={
            "What is a Merkle Sum Tree and how is it used in Proof of Solvency protocols?"
          }
          image={
            "https://aptosfoundation.org/brandbook/logomark/PNG/Aptos_mark_WHT.png"
          }
        />
      </div>
    </div>
  );
};

export default Articles;
