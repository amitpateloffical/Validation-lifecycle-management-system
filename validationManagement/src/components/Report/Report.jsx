import React, { useState } from "react";
import styles from "./Report.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";
import AccordionContainer from "../AccordionContainer/AccordionContainer";

export default function Report() {
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
  const viewAuditTrailReport = [
    {
      accName: "Select Project to Approve",
      noOfRecords: "No Data Available",
    },
  ];
  const viewData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Approve", viewAuditTrailReport)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=124202&format=png&color=000000"
            headingContent="Audit Trail Report"
            paraContent={"View Standard Audit Trail Report of each activity under all modules"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Bind Entity Report"}
            paraContent={
              "View Standard Bind Entity Report for Entities bound to a category/subcategory"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Bind Template Report"}
            paraContent={
              "View Standard Bind Template Report for the document  to which selected template is bound"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Email Report"}
            paraContent={
              "View Standard Email Report for the emails generated during the selected duration"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Execution Report"}
            paraContent={
              "View Standard Execution Report for in Progress and completed executions for selected entity"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Project Report"}
            paraContent={"View Standard Project Report for the Project and Project Summary"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Assessment Report"}
            paraContent={"View Standard Assessment Report for the Framework and Assessment"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Content Libary Report"}
            paraContent={"View Content Libary Report"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card headingContent={"Trace Report"} paraContent={"View Traceability Reports"} />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Retirement Report"}
            paraContent={
              "View Standard Retirement Report for in Progress and Approved retirement activities"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Dry Run Report"}
            paraContent={"View Standard Dry Run Report for in Progress and completed dry run tasks"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Recent Task Report"}
            paraContent={
              "View Standard Recent Task Report for Recent Task Activities performed by selected User"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Group User Report"}
            paraContent={"This report displays roles of users in both Primary and Secondary Sites"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Risk Assessment Report"}
            paraContent={"View System or Functional Risk Assessment performed for and entity"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Batch Process Report"}
            paraContent={
              "This report displays list of Ad Hoc audit trail reports. (CCR , Security Profile, System Settings)"
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
            headingContent={"Ad Hoc Report"}
            paraContent={"Edit or Terminate Ad Hoc Reports "}
          />
        </div>
      </div>
    </>
  );

  const tabs = [
    { label: "Create", content: viewData },
    { label: "Edit", content: editData },
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
