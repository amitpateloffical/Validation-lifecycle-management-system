import React from "react";
import styles from "./Execution.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";

export default function Execution() {
  const executeData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"Dry Run"}
          paraContent={"Trigger a sample run of pre-approved document which is to be executed in the system"}
        />
        <Card
          headingContent={"Electronic"}
          paraContent={"Execution document electronically"}
        />
        <Card
          headingContent={"Manual"}
          paraContent={"Execution is done with pen and paper. Executed document is scanned back to electronic format as PDF"}
        />
        <Card
          headingContent={"Discrepancy"}
          paraContent={"Failures during electronic execution is captured & managed through electronic exception handling process"}
        />
        <Card
          headingContent={"Pending Discrepancies"}
          paraContent={"View of Discrepancies with additonal document deliverales"}
        />
        <Card
          headingContent={"Returned Discrepancies"}
          paraContent={"Provide More information or Re-execute Discrepancy"}
        />
      </div>
    </>
  );

  const editData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"Execution"}
          paraContent={"Edit, Deactivate, Reactivate or Terminate Execution"}
        />
        <Card
          headingContent={"Discrepancy"}
          paraContent={"Edit, Deactivate, Reactivate or Terminate Discrepancy"}
        />
        <Card
          headingContent={"Dry Run"}
          paraContent={"Edit or Terminate Dry Run"}
        />
      </div>
    </>
  );

    const approveData = (
      <>
        <div className={styles.container}>
          <Card
            headingContent={"Execution Transfer"}
            paraContent={
              "Accept or Reject Execution Transfer task"
            }
          />
        </div>
      </>
    );
  const tabs = [
    { label: "Execute", content: executeData },
    { label: "Edit", content: editData },
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
