import React from "react";
import styles from "./Content.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";

export default function Content() {
  const createData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink="https://img.icons8.com/?size=100&id=AJifXivb2xRi&format=png&color=000000"
          headingContent={"Mapping"}
          paraContent={
            "Map tables of requirement and executable documents to be included in Trace Matrix"
          }
        />
        <Card
          imgLink="https://img.icons8.com/?size=100&id=103202&format=png&color=000000"
          headingContent={"Document Metadata "}
          paraContent={
            "Create Document Metadata to capture additional information for a document that id created in  the system"
          }
        />
        <Card
          imgLink="https://img.icons8.com/?size=100&id=S0CCkyTpkqYY&format=png&color=000000"
          headingContent={"Template Group"}
          paraContent={"Create Template Group to organise similar templates in the system"}
        />
        <Card
          imgLink="https://img.icons8.com/?size=100&id=0mcyYaZoPqem&format=png&color=000000"
          headingContent={"Template"}
          paraContent={"Create Template that serves as a preset format for developing a document"}
        />
        <Card
          imgLink="https://img.icons8.com/?size=100&id=107166&format=png&color=000000"
          headingContent={"Content library Group"}
          paraContent={"Create Content Library Groups to maintain Content Libraries in the system"}
        />
        <Card
          imgLink="https://img.icons8.com/?size=100&id=107167&format=png&color=000000"
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
          imgLink="https://img.icons8.com/?size=100&id=D0BWKAkDdalo&format=png&color=000000"
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
          imgLink=""
          headingContent={"External Document"}
          paraContent={"Author External Document without using preconfigure Templates in system"}
        />
        <Card
          imgLink=""
          headingContent={"Document"}
          paraContent={"Author Document using preconfigured Templates in system"}
        />
        <Card
          imgLink=""
          headingContent={"Historical Document"}
          paraContent={"Author Document using preconfigured Templates in system"}
        />
        <Card
          imgLink=""
          headingContent={"Mass Upload External"}
          paraContent={"Author multiple External Documents at once"}
        />
        <Card
          imgLink=""
          headingContent={"Content Library"}
          paraContent={"Author assigned Generic or Entity Based Content Libraries"}
        />
      </div>
    </>
  );
  const editData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink=""
          headingContent={"External Document"}
          paraContent={"Edit or Terminate External Document "}
        />
        <Card headingContent={"Document"} paraContent={"Edit or Terminate Document"} />
        <Card
          imgLink=""
          headingContent={" Historical Document"}
          paraContent={"Edit or Terminate Historical Document "}
        />
        <Card
          imgLink=""
          headingContent={"Mapping"}
          paraContent={"Edit Requirement and Executable Document Mapping"}
        />
        <Card
          imgLink=""
          headingContent={"Document Metadata"}
          paraContent={"Edit Document Metadata details"}
        />
        <Card
          imgLink=""
          headingContent={"Template Group"}
          paraContent={"Edit, Deactivate, Reactivate or Terminate Template Group"}
        />
        <Card
          imgLink=""
          headingContent={"Template"}
          paraContent={"Edit, Deactivate, Reactivate or Terminate Template"}
        />
        <Card
          headingContent={"Content Library Group"}
          paraContent={"Edit, Deactivate, Reactivate or Terminate Content Library Group"}
        />
        <Card
          imgLink=""
          headingContent={"Content Library "}
          paraContent={"Edit, Deactivate, Reactivate or Terminate Content Library"}
        />
        <Card
          imgLink=""
          headingContent={"Template  Binding "}
          paraContent={"Edit Bound Templates"}
        />
      </div>
    </>
  );
  const reviewData = (
    <>
      <div className={styles.container}>
        <Card
          imgLink=""
          headingContent={"Document"}
          paraContent={"Review or Peer Review Document"}
        />
        <Card
          imgLink=""
          headingContent={"Template"}
          paraContent={"Review or Peer Revoew Template"}
        />
        <Card
          imgLink=""
          headingContent={"Content Libary"}
          paraContent={"Review or Peer Review Content Library"}
        />
      </div>
    </>
  );
  const approveData = (
    <>
      <div className={styles.container}>
        <Card imgLink="" headingContent={"Document"} paraContent={"Approve or Reject Document"} />
        <Card
          imgLink=""
          headingContent={"Document Transfer"}
          paraContent={"Approve or Reject Document Transfer"}
        />
        <Card imgLink="" headingContent={"Template"} paraContent={"Approve or Reject Template"} />
        <Card
          imgLink=""
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
