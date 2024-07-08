import React, { useState } from "react";
import styles from "./Content.module.css";
import Card from "../../components/Cards/Card";
import Tab from "../../components/Tabs/Tabs";
import AccordionContainer from "../../components/AccordionContainer/AccordionContainer";

export default function Content() {
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
  const createData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=AJifXivb2xRi&format=png&color=000000"
            headingContent={"Mapping"}
            paraContent={
              "Map tables of requirement and executable documents to be included in Trace Matrix"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=103202&format=png&color=000000"
            headingContent={"Document Metadata "}
            paraContent={
              "Create Document Metadata to capture additional information for a document that id created in  the system"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=S0CCkyTpkqYY&format=png&color=000000"
            headingContent={"Template Group"}
            paraContent={"Create Template Group to organise similar templates in the system"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=0mcyYaZoPqem&format=png&color=000000"
            headingContent={"Template"}
            paraContent={"Create Template that serves as a preset format for developing a document"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=107166&format=png&color=000000"
            headingContent={"Content library Group"}
            paraContent={
              "Create Content Library Groups to maintain Content Libraries in the system"
            }
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=107167&format=png&color=000000"
            headingContent={"Content Library"}
            paraContent={
              "Create Content Library as standard test step to be reused any number of times within same or multiple documents"
            }
          />
        </div>
      </div>
    </>
  );

  const assignData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=D0BWKAkDdalo&format=png&color=000000"
            headingContent={"Document"}
            paraContent={"Assign Document using preconfigured Templates in system"}
          />
        </div>
      </div>
    </>
  );

  const authorData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"External Document"}
            paraContent={"Author External Document without using preconfigure Templates in system"}
          />
        </div>

        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Document"}
            paraContent={"Author Document using preconfigured Templates in system"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Historical Document"}
            paraContent={"Author Document using preconfigured Templates in system"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Mass Upload External"}
            paraContent={"Author multiple External Documents at once"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Content Library"}
            paraContent={"Author assigned Generic or Entity Based Content Libraries"}
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
            imgLink=""
            headingContent={"External Document"}
            paraContent={"Edit or Terminate External Document "}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card headingContent={"Document"} paraContent={"Edit or Terminate Document"} />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={" Historical Document"}
            paraContent={"Edit or Terminate Historical Document "}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Mapping"}
            paraContent={"Edit Requirement and Executable Document Mapping"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Document Metadata"}
            paraContent={"Edit Document Metadata details"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Template Group"}
            paraContent={"Edit, Deactivate, Reactivate or Terminate Template Group"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Template"}
            paraContent={"Edit, Deactivate, Reactivate or Terminate Template"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            headingContent={"Content Library Group"}
            paraContent={"Edit, Deactivate, Reactivate or Terminate Content Library Group"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Content Library "}
            paraContent={"Edit, Deactivate, Reactivate or Terminate Content Library"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Template  Binding "}
            paraContent={"Edit Bound Templates"}
          />
        </div>
      </div>
    </>
  );
  const reviewData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Document"}
            paraContent={"Review or Peer Review Document"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Template"}
            paraContent={"Review or Peer Revoew Template"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Content Libary"}
            paraContent={"Review or Peer Review Content Library"}
          />
        </div>
      </div>
    </>
  );
  const approveData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card imgLink="" headingContent={"Document"} paraContent={"Approve or Reject Document"} />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Document Transfer"}
            paraContent={"Approve or Reject Document Transfer"}
          />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card imgLink="" headingContent={"Template"} paraContent={"Approve or Reject Template"} />
        </div>
        <div onClick={() => handleClick(" Select Project to Approve", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Content Library"}
            paraContent={"Approve or Reject Content Library"}
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
