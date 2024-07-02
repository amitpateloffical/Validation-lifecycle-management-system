import React from "react";
import Tab from "../../components/Tabs/Tabs";
import styles from "./System.module.css";
import Card from "../../components/Cards/Card";

export default function System() {
  const editData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"Mapping Keyword"}
          paraContent={"Edit, Deactivate, Reactivate or Terminate Mapping keyword"}
        />
        <Card
          headingContent={"Mapping Keyword"}
          paraContent={"Edit, Deactivate, Reactivate or Terminate Mapping keyword"}
        />
        <Card
          headingContent={"Mapping Keyword"}
          paraContent={"Edit, Deactivate, Reactivate or Terminate Mapping keyword"}
        />
        <Card
          headingContent={"Mapping Keyword"}
          paraContent={"Edit, Deactivate, Reactivate or Terminate Mapping keyword"}
        />
      </div>
    </>
  );

  const tabs = [{ label: "Edit", content: editData }];
  return (
    <>
      <div className={styles.content}>
        <Tab tabs={tabs} />
      </div>
    </>
  );
}
