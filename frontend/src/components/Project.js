import React from "react";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.project}>
        <div className={styles.projectInfo}>
          <div className={styles.projectName}>FLockChain</div>
          <div className={styles.projectDescription}>
            A Federated Learning network built on Proof of Stake and
            micro-rollups.
          </div>
          <div className={styles.projectLinks}>
            <a
              href="https://github.com/BlocSoc-iitr/FLockChain"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.projectInfo}>
          <div className={styles.projectName}>HorseRiders</div>
          <div className={styles.projectDescription}>
            A complex math and Fast Fourier Transform Library for Huff and EVM
            Assembly
          </div>
          <div className={styles.projectLinks}>
            <a
              href="https://github.com/BlocSoc-iitr/HorseRiders"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.projectInfo}>
          <div className={styles.projectName}>ZKMask</div>
          <div className={styles.projectDescription}>
            ZKMask is the ultimate 2 Factor Authentication app needed to secure
            all transactions through Face Recognition and proving the identity
            by Zero Knowledge Proofs eliminating any centralization and privacy
            risks.
          </div>
          <div className={styles.projectLinks}>
            <a
              href="https://github.com/zkMask"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.projectInfo}>
          <div className={styles.projectName}>MetaMask Snaps</div>
          <div className={styles.projectDescription}>
            Some awesome MetaMask Snaps to make your life easier and more
            secure.
          </div>
          <div className={styles.projectLinks}>
            <a
              href="https://github.com/Bisht13/Inter-IIT-2k23"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
