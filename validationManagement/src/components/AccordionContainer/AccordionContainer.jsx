import React from "react";
import styles from "./AccordionContainer.module.css";
import AccordionUsage from "../Accordion/Accordion";
import { IoIosSearch } from "react-icons/io";
export default function AccordionContainer(props) {
  const { heading, accordionData } = props;
  // const { accName, noOfRecords } = accordionData;
  // console.log(accName);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 className={styles.heading}>{heading}</h3>
        <button onClick={() => props.setOpenPage(false)} className={styles.backButton}>
          Back
        </button>
      </div>
      <div className={styles.searchContainer}>
        <input type="search" name="" id="" placeholder="Task" className={styles.searchInput} />
        <button className={styles.searchButton} style={{ cursor: "pointer" }}>
          <IoIosSearch style={{ fontSize: "25px", paddingRight: "5px" }} />
          Search
        </button>
      </div>
      {accordionData.length > 0 &&
        accordionData.map((data) => <AccordionUsage accordionData={data} />)}
      {/* <AccordionUsage /> */}
    </div>
  );
}
