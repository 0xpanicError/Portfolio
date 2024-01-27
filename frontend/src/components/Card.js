import React from "react";
import styles from "../styles/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.Image}>
        <img src={props.image} alt="image" />
      </div>
      <div className={styles.Card}>
        <div className={styles.Name}>{props.name}</div>
        <div className={styles.Description}>{props.description}</div>
        <div className={styles.Links}>
          <a href={props.githubLink} target="_blank" rel="noreferrer">
            <div className={styles.projectLink}>Github</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
