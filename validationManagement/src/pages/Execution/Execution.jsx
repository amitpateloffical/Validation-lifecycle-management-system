import React, { useState } from "react";
import styles from "./Execution.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";
import AccordionContainer from "../../components/AccordionContainer/AccordionContainer";

export default function Execution() {
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
  const executeData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Dry Run"}
            paraContent={
              "Trigger a sample run of pre-approved document which is to be executed in the system"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card headingContent={"Electronic"} paraContent={"Execution document electronically"} />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Manual"}
            paraContent={
              "Execution is done with pen and paper. Executed document is scanned back to electronic format as PDF"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Discrepancy"}
            paraContent={
              "Failures during electronic execution is captured & managed through electronic exception handling process"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Pending Discrepancies"}
            paraContent={"View of Discrepancies with additonal document deliverales"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Returned Discrepancies"}
            paraContent={"Provide More information or Re-execute Discrepancy"}
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
            headingContent={"Execution"}
            paraContent={"Edit, Deactivate, Reactivate or Terminate Execution"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Discrepancy"}
            paraContent={"Edit, Deactivate, Reactivate or Terminate Discrepancy"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card headingContent={"Dry Run"} paraContent={"Edit or Terminate Dry Run"} />
        </div>
      </div>
    </>
  );

  const approveData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Execution Transfer"}
            paraContent={"Accept or Reject Execution Transfer task"}
          />
        </div>
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
