import React, { useState } from "react";
import styles from "./Project.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";
import AccordionContainer from "../../components/AccordionContainer/AccordionContainer";

export default function Project() {
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
  const projectData = [
    {
      accName: "Reviewed Projects",
      noOfRecords: "33",
    },
    {
      accName: "Rejected Projects",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Saved Projects",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Initiated fron Assessment",
      noOfRecords: "No Data Available",
    },
  ];
  const projectSummaryData = [
    {
      accName: "Select Project Summary to Assign",
      noOfRecords: "No Data Available",
    },
  ];
  const authorProjectSummaryData = [
    {
      accName: "Assigned Project Summaries",
      noOfRecords: "33",
    },
    {
      accName: "Reviewed Project Summaries",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Rejected Project Summaries",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Peer Reviewed Project Summaries",
      noOfRecords: "No Data Available",
    },
  ];
  const editProjectData = [
    {
      accName: "Active Projects",
      noOfRecords: "33",
    },
    {
      accName: "Inactive Projects",
      noOfRecords: "No Data Available",
    },
    {
      accName: "WIP Projects",
      noOfRecords: "No Data Available",
    },
  ];
  const editProjectSummary = [
    {
      accName: "Projects Summary Assignment",
      noOfRecords: "33",
    },
    {
      accName: "View WIP Project Summaries",
      noOfRecords: "No Data Available",
    },
    {
      accName: "Active Project Summary",
      noOfRecords: "No Data Available",
    },
    {
      accName: "InActive Project Summary",
      noOfRecords: "No Data Available",
    },
  ];
  const reviewProject = [
    {
      accName: "Select Project to Review",
      noOfRecords: "No Data Available",
    },
  ];
  const approveProject = [
    {
      accName: "Select Project to Approve",
      noOfRecords: "No Data Available",
    },
  ];
  const approveProjectSummary = [
    {
      accName: "Project SUmmary Approval",
      noOfRecords: "No Data Available",
    },
  ];
  const updateProject = [
    {
      accName: "WIP Projects",
      noOfRecords: "No Data Available",
    },
  ];
  
  const createData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project", projectData)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=hOVP4wUfSsYE&format=png&color=000000"
            headingContent={"Project"}
            paraContent={
              "Create Project to effectively manage document deliverables for Validation of system(s)"
            }
          />
        </div>
      </div>
    </>
  );
  const assignData = (
    <>
      <div className={styles.container}>
        <div
          onClick={() =>
            handleClick(" View Project Summary Reports Assignment", projectSummaryData)
          }
        >
          <Card
            imgLink={"https://img.icons8.com/?size=100&id=y9oViyjUBfAQ&format=png&color=000000"}
            headingContent={"Project Summary"}
            paraContent={
              "Assign Project Summary to a Group or User or Self for summarizing the project"
            }
          />
        </div>
      </div>
    </>
  );
  const authorData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick("Project Summary", authorProjectSummaryData)}>
          <Card
            imgLink={"https://img.icons8.com/?size=100&id=y9oViyjUBfAQ&format=png&color=000000"}
            headingContent={"Project Summary"}
            paraContent={"Develop Project Summary using the associated template"}
          />
        </div>
      </div>
    </>
  );
  const editData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Edit", editProjectData)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=hOVP4wUfSsYE&format=png&color=000000"
            headingContent={"Project "}
            paraContent={"Edit,Deactivate or Terminate Project"}
          />
        </div>
        <div
          onClick={() => handleClick("View Project Summary Reports Assignment", editProjectSummary)}
        >
          <Card
            imgLink={"https://img.icons8.com/?size=100&id=y9oViyjUBfAQ&format=png&color=000000"}
            headingContent={"Project Summary"}
            paraContent={"Edit,Deactivate or Terminate Project Summary"}
          />
        </div>
      </div>
    </>
  );
  const reviewData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select project to Review", reviewProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=hOVP4wUfSsYE&format=png&color=000000"
            headingContent={"Project"}
            paraContent={"Review Project"}
          />
        </div>
        <div onClick={() => handleClick("Review Project Summary", validationPlanData)}>
          <Card
            imgLink={"https://img.icons8.com/?size=100&id=y9oViyjUBfAQ&format=png&color=000000"}
            headingContent={"Project Summary"}
            paraContent={"Peer review or Review Project Summary"}
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
            imgLink="https://img.icons8.com/?size=100&id=hOVP4wUfSsYE&format=png&color=000000"
            headingContent={"Project"}
            paraContent={"Approve or Reject Project"}
          />
        </div>
        <div onClick={() => handleClick(" Select PRoject Summary to Approve", approveProjectSummary)}>
          <Card
            imgLink={"https://img.icons8.com/?size=100&id=y9oViyjUBfAQ&format=png&color=000000"}
            headingContent={"Project Summary"}
            paraContent={"Approve or Reject Project Summary"}
          />
        </div>
      </div>
    </>
  );
  const updateData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project", updateProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=hOVP4wUfSsYE&format=png&color=000000"
            headingContent={"Project"}
            paraContent={
              "Update Project with tasks defined as external or additional during Project creation"
            }
          />
        </div>
      </div>
    </>
  );

  const tabs = [
    { label: "Create", content: createData },
    { label: "Assign", content: assignData },
    { label: "Author", content: authorData },
    { label: "Edit", content: editData },
    { label: "Review", content: reviewData },
    { label: "Approve", content: approveData },
    { label: "Update", content: updateData },
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
        )}{" "}
      </div>
    </>
  );
}
