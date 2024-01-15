import React from "react";
import styles from "../styles/Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.experienceCard}>
        <div className={styles.experienceCardLeft}>
          <div className={styles.experienceCardHeading}>
            Software Engineering Intern
          </div>
          <div className={styles.experienceCardSubHeading}>BlockFlow</div>
          <div className={styles.experienceCardDuration}>
            Aug 2023 - Nov 2023
          </div>
        </div>
        <div className={styles.experienceCardRight}></div>
      </div>
      <div className={styles.experienceCard}>
        <div className={styles.experienceCardLeft}>
          <div className={styles.experienceCardHeading}>
            Software Engineering Intern
          </div>
          <div className={styles.experienceCardSubHeading}>
            Push Protocol | EPNS
          </div>
          <div className={styles.experienceCardDuration}>
            May 2023 - Aug 2023
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
