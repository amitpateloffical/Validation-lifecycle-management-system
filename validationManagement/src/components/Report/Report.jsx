import React from "react";
import styles from "./Report.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";

export default function Report() {
  const viewData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"Audit Trail Report"}
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
