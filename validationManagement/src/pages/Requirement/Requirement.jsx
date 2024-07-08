import React, { useState } from "react";
import styles from "./Requirement.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";
import AccordionContainer from "../../components/AccordionContainer/AccordionContainer";

export default function Requirement() {
  const [openPage, setOpenPage] = useState(false);
  const [accData, setAccData] = useState({
    heading: "",
    accordionData: [],
  });
  const handleClick = (heading, accordionData) => {
    // console.log(heading, accordionData);
    setAccData({
      heading: heading,
      accordionData: accordionData,
    });
    setOpenPage(true);
  };

  const approveProject = [
    {
      accName: "Select Project to Approve",
      noOfRecords: "No Data Available",
    },
  ];

  const developData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=67561&format=png&color=000000"
            headingContent={"Trace Matrix"}
            paraContent={"Develop Trace Matrix based on trace models bound with the entity"}
          />
        </div>

        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=BgtYnJlfI2-j&format=png&color=000000"
            headingContent={"Trace Model"}
            paraContent={
              "Create trace models by choosing content type and specifying relationship between them"
            }
          />
        </div>
      </div>
    </>
  );
  const maintainData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=67561&format=png&color=000000"
            headingContent={"Trace"}
            paraContent={
              "View Traceability Matrices to identify Requirements or Tests which have been impacted through CCR"
            }
          />
        </div>
      </div>
    </>
  );
  const editData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=67561&format=png&color=000000"
            headingContent={"Trace"}
            paraContent={"Edit traceability  "}
          />
        </div>
      </div>
    </>
  );
  const reviewData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=67561&format=png&color=000000"
            headingContent={"Trace"}
            paraContent={"Review traceability  "}
          />
        </div>
      </div>
    </>
  );
  const approveData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=67561&format=png&color=000000"
            headingContent={"Trace"}
            paraContent={"Approve or Reject Trace Model and Trace Matrix"}
          />
        </div>
      </div>
    </>
  );

  const tabs = [
    { label: "Develop", content: developData },
    { label: "Maintain", content: maintainData },
    { label: "Edit", content: editData },
    { label: "Review", content: reviewData },
    { label: "Approve", content: approveData },
  ];
  return (
    <>
      <div className={styles.content}>
        {openPage ? (
          <div>
            <div className={styles.overlay}>
              <AccordionContainer
                setOpenPage={setOpenPage}
                heading={accData.heading}
                accordionData={accData.accordionData}
              />
            </div>
          </div>
        ) : (
          <div className={styles.content}>
            <Tab tabs={tabs} />
          </div>
        )}
      </div>
    </>
  );
}
