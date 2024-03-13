import React from "react";
import styles from "../styles/Experience.module.css";
import eigenlayer from "../assets/expereince/eigenlayer.png";
import yacademy from "../assets/expereince/yacademy.png";
import push from "../assets/expereince/push.png";
import blocsoc from "../assets/expereince/blocsoc.png";

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.experienceCard}>
        <div className={styles.sub}>
          <img src={eigenlayer} className={styles.experienceCardImage} />
          <div className={styles.headings}>
            <div className={styles.experienceCardHeading}>
              Protocol Research Intern
            </div>
            <div className={styles.experienceCardSubHeading}>EigenLayer</div>
          </div>
        </div>
        <div className={styles.experienceCardDuration}>Feb 2024 - Present</div>
      </div>
      <div className={styles.experienceCard}>
        <div className={styles.sub}>
          <img src={yacademy} className={styles.experienceCardImage} />
          <div className={styles.headings}>
            <div className={styles.experienceCardHeading}>
              ZK Security Fellow
            </div>
            <div className={styles.experienceCardSubHeading}>yAcademy</div>
          </div>
        </div>
        <div className={styles.experienceCardDuration}>Jan 2024 - Present</div>
      </div>
      <div className={styles.experienceCard}>
        <div className={styles.sub}>
          <img src={push} className={styles.experienceCardImage} />
          <div className={styles.headings}>
            <div className={styles.experienceCardHeading}>
              Blockchain Developer Intern
            </div>
            <div className={styles.experienceCardSubHeading}>
              Push Protocol | EPNS
            </div>
          </div>
        </div>
        <div className={styles.experienceCardDuration}>May 2023 - Sep 2023</div>
      </div>
      <div className={styles.experienceCard}>
        <div className={styles.sub}>
          <img src={blocsoc} className={styles.experienceCardImage} />
          <div className={styles.headings}>
            <div className={styles.experienceCardHeading}>
              Joint Secretary | Developer
            </div>
            <div className={styles.experienceCardSubHeading}>
              Blockchain Society, IIT Roorkee
            </div>
          </div>
        </div>
        <div className={styles.experienceCardDuration}>Oct 2022 - Present</div>
      </div>
    </div>
  );
};

export default Experience;
