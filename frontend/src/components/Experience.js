import React from "react";
import styles from "../styles/Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.experienceCard}>
        <div className={styles.experienceCardLeft}>
          <div className={styles.experienceCardHeading}>ZK Security Fellow</div>
          <div className={styles.experienceCardSubHeading}>yAcademy</div>
          <div className={styles.experienceCardDuration}>
            Jan 2024 - Present
          </div>
        </div>
        <div className={styles.experienceCardRight}></div>
      </div>
      <div className={styles.experienceCard}>
        <div className={styles.experienceCardLeft}>
          <div className={styles.experienceCardHeading}>
            Blockchain Developer Intern
          </div>
          <div className={styles.experienceCardSubHeading}>
            Push Protocol | EPNS
          </div>
          <div className={styles.experienceCardDuration}>
            May 2023 - Sep 2023
          </div>
        </div>
        <div className={styles.experienceCardRight}></div>
      </div>
      <div className={styles.experienceCard}>
        <div className={styles.experienceCardLeft}>
          <div className={styles.experienceCardHeading}>
            Joint Secretary | Developer
          </div>
          <div className={styles.experienceCardSubHeading}>
            Blockchain Society, IIT Roorkee
          </div>
          <div className={styles.experienceCardDuration}>
            Oct 2022 - Present
          </div>
        </div>
        <div className={styles.experienceCardRight}></div>
      </div>
    </div>
  );
};

export default Experience;
