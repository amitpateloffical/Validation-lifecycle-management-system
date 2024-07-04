import React from "react";
import styles from "./Project.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";

export default function Project() {
  const createData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink="https://img.icons8.com/?size=100&id=hOVP4wUfSsYE&format=png&color=000000"
          headingContent={"Project"}
          paraContent={
            "Create Project to effectively manage document deliverables for Validation of system(s)"
          }
        />
      </div>
    </>
  );
  const assignData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink={"https://img.icons8.com/?size=100&id=y9oViyjUBfAQ&format=png&color=000000"}
          headingContent={"Project Summary"}
          paraContent={
            "Assign Project Summary to a Group or User or Self for summarizing the project"
          }
        />
      </div>
    </>
  );
  const authorData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink={"https://img.icons8.com/?size=100&id=y9oViyjUBfAQ&format=png&color=000000"}
          headingContent={"Project Summary"}
          paraContent={"Develop Project Summary using the associated template"}
        />
      </div>
    </>
  );
  const editData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink="https://img.icons8.com/?size=100&id=hOVP4wUfSsYE&format=png&color=000000"
          headingContent={"Project "}
          paraContent={"Edit,Deactivate or Terminate Project"}
        />
        <Card
          imgLink={"https://img.icons8.com/?size=100&id=y9oViyjUBfAQ&format=png&color=000000"}
          headingContent={"Project Summary"}
          paraContent={"Edit,Deactivate or Terminate Project Summary"}
        />
      </div>
    </>
  );
  const reviewData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink="https://img.icons8.com/?size=100&id=hOVP4wUfSsYE&format=png&color=000000"
          headingContent={"Project"}
          paraContent={"Review Project"}
        />
        <Card
          imgLink={"https://img.icons8.com/?size=100&id=y9oViyjUBfAQ&format=png&color=000000"}
          headingContent={"Project Summary"}
          paraContent={"Peer review or Review Project Summary"}
        />
      </div>
    </>
  );
  const approveData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink="https://img.icons8.com/?size=100&id=hOVP4wUfSsYE&format=png&color=000000"
          headingContent={"Project"}
          paraContent={"Approve or Reject Project"}
        />
        <Card
          imgLink={"https://img.icons8.com/?size=100&id=y9oViyjUBfAQ&format=png&color=000000"}
          headingContent={"Project Summary"}
          paraContent={"Approve or Reject Project Summary"}
        />
      </div>
    </>
  );
  const updateData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink="https://img.icons8.com/?size=100&id=hOVP4wUfSsYE&format=png&color=000000"
          headingContent={"Project"}
          paraContent={
            "Update Project with tasks defined as external or additional during Project creation"
          }
        />
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
        <Tab tabs={tabs} />
      </div>
    </>
  );
}
