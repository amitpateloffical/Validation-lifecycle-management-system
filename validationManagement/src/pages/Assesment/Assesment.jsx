import React, { useState } from "react";
import styles from "./Assesment.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";
import AccordionContainer from "../../components/AccordionContainer/AccordionContainer";

export default function Assesment() {
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

  const validationPlanData = [
    {
      accName: "Reviewed Validation Plans",
      noOfRecords: "33",
    },
    {
      accName: "Rejected Validation Plans",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Saved Validation Plans",
      noOfRecords: "No Data Available",
    },
  ];
  const validationSummaryData = [
    {
      accName: "Reviewed Validation Summary",
      noOfRecords: "33",
    },
    {
      accName: "Rejected Validation Summary",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Saved Validation Summary",
      noOfRecords: "No Data Available",
    },
  ];
  const assessmentData = [
    {
      accName: "Assigned Assessments",
      noOfRecords: "33",
    },
    {
      accName: "Reviewed Assessments",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Rejected Assessments",
      noOfRecords: "No Data Available",
    },
  ];
  const editValidationPlan = [
    {
      accName: "Active Validation Plan",
      noOfRecords: "33",
    },
    {
      accName: "WIP Validation Plan",
      noOfRecords: "No Data Available",
    },
  ];
  const editValidationSummary = [
    {
      accName: "Active Validation Summary",
      noOfRecords: "33",
    },
    {
      accName: "WIP Validation Summary",
      noOfRecords: "No Data Available",
    },
  ];
  const createData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Validation Plan", validationPlanData)}>
          <Card 
            imgLink={"https://img.icons8.com/?size=100&id=7plf760YG6D3&format=png&color=000000"}
            headingContent={"Validation Plan"}
            paraContent={
              "Create Validation Plan for entities with defined mapping name, scope and description"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Validation Summary", validationSummaryData)}>
          <Card
            imgLink={"https://img.icons8.com/?size=100&id=qGGl2WuDAF0Z&format=png&color=000000"}
            headingContent={"Validation Summary "}
            paraContent={
              "Create Validation summary for entities with defined name, scope and description"
            }
          />
        </div>
      </div>
    </>
  );
  const performData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Assessment to Perform", assessmentData)}>
          <Card
            imgLink={"https://img.icons8.com/?size=100&id=117512&format=png&color=000000"}
            headingContent={"Assesment"}
            paraContent={"Perform Assesment based upon assignment of the task"}
          />
        </div>
      </div>
    </>
  );

  const editData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Validation Plan to Edit", editValidationPlan)}>
          <Card
            imgLink={"https://img.icons8.com/?size=100&id=7plf760YG6D3&format=png&color=000000"}
            headingContent={"Validation Plan"}
            paraContent={"Edit or Terminate Validation Plan  "}
          />
        </div>
        <div
          onClick={() => handleClick(" Select Validation Summary to Edit", editValidationSummary)}
        >
          <Card
            imgLink={"https://img.icons8.com/?size=100&id=qGGl2WuDAF0Z&format=png&color=000000"}
            headingContent={"Validation Summary "}
            paraContent={"Edit or Terminate Validation Summary"}
          />
        </div>
      </div>
    </>
  );

  const tabs = [
    { label: "Create", content: createData },
    { label: "Perform", content: performData },
    { label: "Edit", content: editData },
  ];

  const tabs2 = [
    { label: "Create", content: createData },
    { label: "Perform", content: performData },
    { label: "Edit", content: editData },
  ];

  return (
    <>
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
    </>
  );
}
