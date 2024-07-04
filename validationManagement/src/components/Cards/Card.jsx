import React from "react";
import styles from "./Card.module.css";
import { FaProjectDiagram } from "react-icons/fa";

export default function Card(props) {
    const { imgLink = "./diplomaIcon.png", headingContent, paraContent } = props;
  return (
    <div className={styles.Card}>
      <div
        className={styles.leftDiv}
        style={{ fontSize: "3rem", textAlign: "center", color: "red" }}
      >
        <img
          src={imgLink}
          onError={(e) => {
            e.target.src = "./diplomaIcon.png";
          }}
        />
        {/* <img
          src="./diplomaIcon.png"
          alt="diplomaIcon"
        /> */}
        {/* <FaProjectDiagram /> */}
      </div>
      <div className={styles.rightDiv}>
        <h4>{headingContent}</h4>
        <p>{paraContent}</p>
      </div>
    </div>
  );
}
