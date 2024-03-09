import Navbar from "../../components/Navbar";
import styles from "../../styles/Page.module.css";
import ArticleCover from "../../assets/MST_1.png";

const EigenLayerAVSArticle = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.articleTitle}>
        <h1>
          How to build an Actively Validated Service on EigenLayer? A Technical
          Overview
        </h1>
        19th March 2024
      </div>
      <div className={styles.articleBody}>
        <div className={styles.articleBodyLeft}>
          <br />
          <img
            src={ArticleCover}
            alt="EigenLayer AVS"
            className={styles.articleImage}
          />
          <br />
          <br />
          EigenLayer is a protocol that enables developers to bootstrap a trust
          network through restaking. Anyone can build a permissionless network
          on EigenLayer and use it to build an Actively Validated Service (AVS).
        </div>
        <div className={styles.tableContent}>
          <h4>Table of Contents</h4>
          <ul>
            <li>Vulnerebility Analysis</li>
            <li>Mitigation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EigenLayerAVSArticle;
