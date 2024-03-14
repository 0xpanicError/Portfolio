import React from "react";
import styles from "../styles/Project.module.css";
import flockchain from "../assets/project/flockchain.png";
import huff from "../assets/project/huff.png";
import zkmask from "../assets/project/zkmask.png";
import metamask from "../assets/project/metamask.png";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectCard}>
        <div className={styles.projectInfo}>
          <img src={flockchain} className={styles.projectCardImage} />
          <div className={styles.headings}>
            <div className={styles.projectName}>FLockChain</div>
            <div className={styles.projectLinks}>
              <a
                href="https://github.com/BlocSoc-iitr/FLockChain"
                target="_blank"
                className={styles.projectLink}
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className={styles.projectDescription}>
          A Federated Learning network built on Proof of Stake and
          micro-rollups.
        </div>
      </div>
      <div className={styles.projectCard}>
        <div className={styles.projectInfo}>
          <img src={huff} className={styles.projectCardImage} />
          <div className={styles.headings}>
            <div className={styles.projectName}>HorseRiders</div>
            <div className={styles.projectLinks}>
              <a
                href="https://github.com/BlocSoc-iitr/HorseRiders"
                target="_blank"
                className={styles.projectLink}
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className={styles.projectDescription}>
          A complex math and Fast Fourier Transform Library for Huff and EVM
          Assembly
        </div>
      </div>
      <div className={styles.projectCard}>
        <div className={styles.projectInfo}>
          <img src={zkmask} className={styles.projectCardImage} />
          <div className={styles.headings}>
            <div className={styles.projectName}>ZKMask</div>
            <div className={styles.projectLinks}>
              <a
                href="https://github.com/zkMask"
                target="_blank"
                className={styles.projectLink}
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className={styles.projectDescription}>
          ZKMask is a 2FA solution using face recognition and zk circuits.
        </div>
      </div>
      <div className={styles.projectCard}>
        <div className={styles.projectInfo}>
          <img src={metamask} className={styles.projectCardImage} />
          <div className={styles.headings}>
            <div className={styles.projectName}>MetaMask Snaps</div>
            <div className={styles.projectLinks}>
              <a
                href="https://github.com/Bisht13/Inter-IIT-2k23"
                target="_blank"
                className={styles.projectLink}
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className={styles.projectDescription}>
          Some awesome MetaMask Snaps to make your life easier and more secure.
        </div>
      </div>
    </div>
  );
};

export default Projects;
