import Navbar from "../../components/Navbar";
import styles from "../../styles/Page.module.css";
import ArticleCover from "../../assets/eigenlayeravs/AVS_Cover.png";

const EigenLayerAVSArticle = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.nav}>
          <Navbar />
        </div>
        <div className={styles.articleTitle}>
          <h1>Demistifying the Incredible Squaring AVS by EIgenLayer</h1>
          26th March, 2024
        </div>
        <div className={styles.articleBody}>
          <div className={styles.articleBodyLeft}>
            <br />
            <img
              src={ArticleCover}
              alt="Merkle Sum Tree"
              className={styles.articleImage}
            />
            <br />
            <h3>Introduction</h3>
          </div>
          <div className={styles.tableContent}>
            <h4>Table of Contents</h4>
            <ul>
              <li>Introduction</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EigenLayerAVSArticle;
