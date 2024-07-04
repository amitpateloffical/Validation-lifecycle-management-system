import React from "react";
import styles from "./Content.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";

export default function Content() {
  const createData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"Mapping"}
          paraContent={
            "Map tables of requirement and executable documents to be included in Trace Matrix"
          }
        />
        <Card
          headingContent={"Document Metadata "}
          paraContent={
            "Create Document Metadata to capture additional information for a document that id created in  the system"
          }
        />
        <Card
          headingContent={"Template Group"}
          paraContent={"Create Template Group to organise similar templates in the system"}
        />
        <Card
          headingContent={"Template"}
          paraContent={"Create Template that serves as a preset format for developing a document"}
        />
        <Card
          headingContent={"Content library Group"}
          paraContent={"Create Content Library Groups to maintain Content Libraries in the system"}
        />
        <Card
          headingContent={"Content Library"}
          paraContent={
            "Create Content Library as standard test step to be reused any number of times within same or multiple documents"
          }
        />
      </div>
    </>
  );

  const assignData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"Document"}
          paraContent={"Assign Document using preconfigured Templates in system"}
        />
      </div>
    </>
  );

  const authorData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"External Document"}
          paraContent={"Author External Document without using preconfigure Templates in system"}
        />
        <Card
          headingContent={"Document"}
          paraContent={"Author Document using preconfigured Templates in system"}
        />
        <Card
          headingContent={"Historical Document"}
          paraContent={"Author Document using preconfigured Templates in system"}
        />
        <Card
          headingContent={"Mass Upload External"}
          paraContent={"Author multiple External Documents at once"}
        />
      </div>
    </>
  );
  const editData = (
    <>
      <div className={styles.container}>
        <Card
          headingContent={"External Document"}
          paraContent={"Edit or Terminate External Document "}
        />
        <Card headingContent={"Document"} paraContent={"Edit or Terminate Document"} />
        <Card
          headingContent={" Historical Document"}
          paraContent={"Edit or Terminate Historical Document "}
        />
        <Card
          headingContent={"Mapping"}
          paraContent={"Edit Requirement and Executable Document Mapping"}
        />
      </div>
    </>
  );
  const reviewData = (
    <>
      <div className={styles.container}>
        <Card headingContent={"Document"} paraContent={"Review or Peer Review Document"} />
        <Card headingContent={"Template"} paraContent={"Review or Peer Revoew Template"} />
        <Card
          headingContent={"Content Libary"}
          paraContent={"Review or Peer Review Content Library"}
        />
      </div>
    </>
  );
  const approveData = (
    <>
      <div className={styles.container}>
        <Card headingContent={"Document"} paraContent={"Approve or Reject Document"} />
        <Card
          headingContent={"Document Transfer"}
          paraContent={"Approve or Reject Document Transfer"}
        />
        <Card headingContent={"Template"} paraContent={"Approve or Reject Template"} />
        <Card
          headingContent={"Content Library"}
          paraContent={"Approve or Reject Content Library"}
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
  ];
  return (
    <>
      <div className={styles.content}>
        <Tab tabs={tabs} />
      </div>
    </>
  );
}
