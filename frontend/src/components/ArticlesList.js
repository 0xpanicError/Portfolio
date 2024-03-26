import React from "react";
import styles from "../styles/Articles.module.css";
import ArticleCard from "./Card";
import MerkleSumTreeCover from "../assets/merklesumtree/MST_cover.png";
import EigenLayerAVSCover from "../assets/eigenlayeravs/AVS_Cover.png";

const Articles = () => {
  return (
    <div className={styles.container}>
      {/* <ArticleCard
        slug={"eigenlayeravs"}
        name={"EigenLayer AVS"}
        description={
          "How to build an Actively Validated Service on EigenLayer?"
        }
        image={EigenLayerAVSCover}
      /> */}
      <ArticleCard
        slug={"merklesumtree"}
        name={"Merkle Sum Tree"}
        description={
          "What is a Merkle Sum Tree and how is it used in Proof of Solvency protocols?"
        }
        image={MerkleSumTreeCover}
      />
    </div>
  );
};

export default Articles;
