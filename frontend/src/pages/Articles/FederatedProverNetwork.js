import Navbar from "../../components/Navbar";
import styles from "../../styles/Page.module.css";
import ArticleCover from "../../assets/merklesumtree/MST_1.png";

const FederatedProverNetworkArticle = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.articleTitle}>
        <h1>
          How Federated Prover Networks enables Light clients to verify rollups
        </h1>
        29th February 2024
      </div>
      <div className={styles.articleBody}>
        <div className={styles.articleBodyLeft}>
          <br />
          <img
            src={ArticleCover}
            alt="Federated Prover Network"
            className={styles.articleImage}
          />
          <br />
          <br />A Federated Prover Network is a network of nodes that generate
          proofs in a distributed way and combine them recurvisly to reduce
          computional work and minimize node requirements of the network.
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

export default FederatedProverNetworkArticle;
