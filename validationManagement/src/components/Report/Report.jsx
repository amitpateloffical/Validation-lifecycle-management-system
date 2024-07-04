import React from "react";
import styles from "./Report.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";

export default function Report() {
  const viewData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink="https://img.icons8.com/?size=100&id=124202&format=png&color=000000"
          headingContent="Audit Trail Report"
          paraContent={"View Standard Audit Trail Report of each activity under all modules"}
        />
        <Card
          headingContent={"Bind Entity Report "}
          paraContent={
            "View Standard Bind Entity Report for Entities bound to a category/subcategory"
          }
        />
        <Card
          headingContent={"Bind Template Report"}
          paraContent={
            "View Standard Bind Template Report for the document  to which selected template is bound"
          }
        />
        <Card
          headingContent={"Email Report"}
          paraContent={
            "View Standard Email Report for the emails generated during the selected duration"
          }
        />
        <Card
          headingContent={"Execution Report"}
          paraContent={
            "View Standard Execution Report for in Progress and completed executions for selected entity"
          }
        />
        <Card
          headingContent={"Project Report"}
          paraContent={"View Standard Project Report for the Project and Project Summary"}
        />
        <Card
          headingContent={"Assessment Report"}
          paraContent={
            "View Standard Assessment Report for the Framework and Assessment"
          }
        />
        <Card
          headingContent={"Content Libary Report"}
          paraContent={
            "View Content Libary Report"
          }
        />
        <Card
          headingContent={"Trace Report"}
          paraContent={
            "View Traceability Reports"
          }
        />
        <Card
          headingContent={"Retirement Report"}
          paraContent={
            "View Standard Retirement Report for in Progress and Approved retirement activities"
          }
        />
        <Card
          headingContent={"Dry Run Report"}
          paraContent={
            "View Standard Dry Run Report for in Progress and completed dry run tasks"
          }
        />
        <Card
          headingContent={"Recent Task Report"}
          paraContent={
            "View Standard Recent Task Report for Recent Task Activities performed by selected User"
          }
        />
        <Card
          headingContent={"Group User Report"}
          paraContent={
            "This report displays roles of users in both Primary and Secondary Sites"
          }
        />
        <Card
          headingContent={"Risk Assessment Report"}
          paraContent={
            "View System or Functional Risk Assessment performed for and entity"
          }
        />
        <Card
          headingContent={"Batch Process Report"}
          paraContent={
            "This report displays list of Ad Hoc audit trail reports. (CCR , Security Profile, System Settings)"
          }
        />
      </div>
    </>
  );

  const editData = (
    <>
      <div className={styles.container}>
        <Card headingContent={"Ad Hoc Report"} paraContent={"Edit or Terminate Ad Hoc Reports "} />
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
        <Tab tabs={tabs} />
      </div>
    </>
  );
}
