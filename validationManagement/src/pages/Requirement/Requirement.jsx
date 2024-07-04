import React from "react";
import styles from "./Requirement.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";

export default function Requirement() {
  const developData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"Trace Matrix"}
          paraContent={"Develop Trace Matrix based on trace models bound with the entity"}
        />
        <Card
          headingContent={"Trace Model"}
          paraContent={
            "Create trace models by choosing content type and specifying relationship between them"
          }
        />
      </div>
    </>
  );
  const maintainData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"Trace"}
          paraContent={
            "View Traceability Matrices to identify Requirements or Tests which have been impacted through CCR"
          }
        />
      </div>
    </>
  );
  const editData = (
    <>
      <div className={styles.container}>
        <Card headingContent={"Trace"} paraContent={"Edit traceability  "} />
      </div>
    </>
  );
  const reviewData = (
    <>
      <div className={styles.container}>
        <Card headingContent={"Trace"} paraContent={"Review traceability  "} />
      </div>
    </>
  );
  const approveData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"Trace"}
          paraContent={"Approve or Reject Trace Model and Trace Matrix"}
        />
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
        <Tab tabs={tabs} />
      </div>
    </>
  );
}
