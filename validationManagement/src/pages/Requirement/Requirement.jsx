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
          paraContent={"Create trace models by choosing content type and specifying relationship between them"}
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
        <Card
          headingContent={"Validation Summary "}
          paraContent={
            "Create Validation summary for entities with defined name, scope and description"
          }
        />
      </div>
    </>
  );
  const editData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"Validation Plan"}
          paraContent={"Edit or Terminate Validation Plan  "}
        />
        <Card
          headingContent={"Validation Summary "}
          paraContent={"Edit or Terminate Validation Summary"}
        />
      </div>
    </>
  );
  const reviewData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"Validation Plan"}
          paraContent={"Edit or Terminate Validation Plan  "}
        />
        <Card
          headingContent={"Validation Summary "}
          paraContent={"Edit or Terminate Validation Summary"}
        />
      </div>
    </>
  );
  const approveData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"Validation Plan"}
          paraContent={"Edit or Terminate Validation Plan  "}
        />
        <Card
          headingContent={"Validation Summary "}
          paraContent={"Edit or Terminate Validation Summary"}
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
