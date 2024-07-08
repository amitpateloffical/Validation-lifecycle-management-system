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

  const executeDryRun = [
    {
      accName: "Test Dry Run Tasks",
      noOfRecords: "No Data Available",
    },
  ];

  const executeElectronic = [
    {
      accName: "Electronic Execution Tasks",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Split Execution Tasks",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Peer Reviewed Executions",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Reviewed Executions",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Rejected Executions",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Suspended Executions",
      noOfRecords: "No Data Available",
    },
  ];

  const executeManual = [
    {
      accName: "Manual Tasks",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Peer Reviewed Executions",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Reviewed Executions",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Rejected Executions",
      noOfRecords: "No Data Available",
    },
  ];

  const executeDiscrepancy = [
    {
      accName: "Select Discrepancy to Assess",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Select Reviewed Discrepancy To Assess",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Select Discrepancy Where More Information Provided to Assess",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Select Re-Executed Discrepancy to Assess",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Select Deferred Discrepancy to Assess",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Select Discrepancy to Re-Initiate",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Saved Discrepancy to Assess",
      noOfRecords: "No Data Available",
    },
  ];

  const executePendingDiscrepancy = [
    {
      accName: "Select Discrepancy with pending Deliverables",
      noOfRecords: "No Data Available",
    },
  ];

  const executeReturnedDiscrepancy = [
    {
      accName: "Select Discrepancy to Assess",
      noOfRecords: "No Data Available",
    },
  ];

  const editExecution = [
    {
      accName: "Active Execution Tasks",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Inactive Execution Tasks",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Suspended Execution",
      noOfRecords: "No Data Available",
    },
  ];

  const editDiscrepancy = [
    {
      accName: "Active Discrepancy",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Inactive Discrepancy",
      noOfRecords: "No Data Available",
    },
  ];

  const editDryRun = [
    {
      accName: "Test Dry Run Tasks",
      noOfRecords: "No Data Available",
    },
  ];
  const approveExecutionTransfer = [
    {
      accName: "Execution Transfer",
      noOfRecords: "No Data Available",
    },
  ];

  const executeData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Dry Run Task To Execute", executeDryRun)}>
          <Card
            headingContent={"Dry Run"}
            paraContent={
              "Trigger a sample run of pre-approved document which is to be executed in the system"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Document to Execute", executeElectronic)}>
          <Card headingContent={"Electronic"} paraContent={"Execution document electronically"} />
        </div>
        <div onClick={() => handleClick(" Select Document to Execute", executeManual)}>
          <Card
            headingContent={"Manual"}
            paraContent={
              "Execution is done with pen and paper. Executed document is scanned back to electronic format as PDF"
            }
          />
        </div>
        <div onClick={() => handleClick("Discrepancy Assessment", executeDiscrepancy)}>
          <Card
            headingContent={"Discrepancy"}
            paraContent={
              "Failures during electronic execution is captured & managed through electronic exception handling process"
            }
          />
        </div>
        <div onClick={() => handleClick("Select Pending Discrepancies", executePendingDiscrepancy)}>
          <Card
            headingContent={"Pending Discrepancies"}
            paraContent={"View of Discrepancies with additonal document deliverales"}
          />
        </div>
        <div onClick={() => handleClick(" Discrepancies Returned", executeReturnedDiscrepancy)}>
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
        <div onClick={() => handleClick("Select Execution Task to Edit", editExecution)}>
          <Card
            headingContent={"Execution"}
            paraContent={"Edit, Deactivate, Reactivate or Terminate Execution"}
          />
        </div>
        <div onClick={() => handleClick(" Discrepancies for Edit", editDiscrepancy)}>
          <Card
            headingContent={"Discrepancy"}
            paraContent={"Edit, Deactivate, Reactivate or Terminate Discrepancy"}
          />
        </div>
        <div onClick={() => handleClick(" SSelect Dry Run Task To Edit", editDryRun)}>
          <Card headingContent={"Dry Run"} paraContent={"Edit or Terminate Dry Run"} />
        </div>
      </div>
    </>
  );

  const approveData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Transfer Execution Task", approveExecutionTransfer)}>
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
