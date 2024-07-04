import React from "react";
import styles from "./Assesment.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";

export default function Assesment() {
  const createData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink={"https://img.icons8.com/?size=100&id=7plf760YG6D3&format=png&color=000000"}
          headingContent={"Validation Plan"}
          paraContent={
            "Create Validation Plan for entities with defined mapping name, scope and description"
          }
        />
        <Card
          imgLink={"https://img.icons8.com/?size=100&id=qGGl2WuDAF0Z&format=png&color=000000"}
          headingContent={"Validation Summary "}
          paraContent={
            "Create Validation summary for entities with defined name, scope and description"
          }
        />
      </div>
    </>
  );
  const performData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink={"https://img.icons8.com/?size=100&id=117512&format=png&color=000000"}
          headingContent={"Assesment"}
          paraContent={"Perform Assesment based upon assignment of the task"}
        />
      </div>
    </>
  );

  const editData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink={"https://img.icons8.com/?size=100&id=7plf760YG6D3&format=png&color=000000"}
          headingContent={"Validation Plan"}
          paraContent={"Edit or Terminate Validation Plan  "}
        />
        <Card
          imgLink={"https://img.icons8.com/?size=100&id=qGGl2WuDAF0Z&format=png&color=000000"}
          headingContent={"Validation Summary "}
          paraContent={"Edit or Terminate Validation Summary"}
        />
      </div>
    </>
  );

  const tabs = [
    { label: "Create", content: createData },
    { label: "Perform", content: performData },
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
