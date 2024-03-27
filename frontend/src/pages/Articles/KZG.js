import Navbar from "../../components/Navbar";
import styles from "../../styles/Page.module.css";
import ArticleCover from "../../assets/kzg/paper_cover.png";

const KZGArticle = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.nav}>
          <Navbar />
        </div>
        <div className={styles.articleTitle}>
          <h1>
            How to prove knowledge of something without revealing it? A Deep
            Dive into KZG Commitments
          </h1>
          26th March, 2024
        </div>
        <div className={styles.articleBody}>
          <div className={styles.articleBodyLeft}>
            <br />
            <img
              src={ArticleCover}
              alt="KZG Commitments"
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

export default KZGArticle;
