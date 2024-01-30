import React from "react";
import styles from "../styles/Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${props.slug}`);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.Image}>
        <img src={props.image} alt="image" />
      </div>
      <div className={styles.Card}>
        <div className={styles.Name}>{props.name}</div>
        <div className={styles.Description}>{props.description}</div>
      </div>
    </div>
  );
};

export default Card;
