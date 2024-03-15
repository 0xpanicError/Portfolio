import React from "react";
import styles from "../styles/Articles.module.css";
import ArticleCard from "./Card";
import MerkleSumTreeCover from "../assets/merklesumtree/MST_logo.png";

const Articles = () => {
  return (
    <div className={styles.container}>
      <ArticleCard
        slug={"merklesumtree"}
        name={"Merkle Sum Tree"}
        description={
          "What is a Merkle Sum Tree and how is it used in Proof of Solvency protocols?"
        }
        image={MerkleSumTreeCover}
      />
      {/* <ArticleCard
        slug={"provernetworks"}
        name={"Federated Prover Networks"}
        description={
          "What is a Federated Prover Network and how does it work? What are its applications?"
        }
        image={
          "https://aptosfoundation.org/brandbook/logomark/PNG/Aptos_mark_WHT.png"
        }
      />
      <ArticleCard
        slug={"eigenlayeravs"}
        name={"EigenLayer AVS"}
        description={"How to build an AVS on EigenLayer? A Technical Overview"}
        image={
          "https://aptosfoundation.org/brandbook/logomark/PNG/Aptos_mark_WHT.png"
        }
      /> */}
    </div>
  );
};

export default Articles;
