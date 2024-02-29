import React from "react";
import styles from "../styles/Articles.module.css";
import ArticleCard from "./Card";

const Articles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.articleList}>
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
        <ArticleCard
          slug={"provernetworks"}
          name={"Federated Prover Networks"}
          description={
            "What is a Federated Prover Network and how does it work? What are its applications?"
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
