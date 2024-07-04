import React from "react";
import Tab from "../../components/Tabs/Tabs";
import styles from "./System.module.css";
import Card from "../../components/Cards/Card";

export default function System() {
  const editData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink={"https://img.icons8.com/?size=100&id=DfHwHLuIf2Sw&format=png&color=000000"}
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
