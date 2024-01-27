import React from "react";
import styles from "../styles/Articles.module.css";
import ArticleCard from "./Card";

const Articles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectList}>
        <ArticleCard
          id={"1"}
          name={"Aptos Zero Day Futures"}
          description={
            "Developed a fast and secure Zero day to expiry futures trading platform on Aptos L1."
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
