import React from "react";
import styles from "./Card.module.css";
export default function Card(props) {
    const {headingContent, paraContent} = props;
  return (
    <div className={styles.Card}>
      <div className={styles.leftDiv}>
        <img src="./diplomaIcon.png" alt="" />
      </div>
      <div className={styles.rightDiv}>
        <h4>{headingContent}</h4>
        <p>{paraContent}</p>
      </div>
    </div>
  );
}
