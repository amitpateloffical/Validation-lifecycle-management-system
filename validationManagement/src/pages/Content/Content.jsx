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

  const approveProject = [];
  const createTemplate = [
    {
      accName: "Select Templates to Author",
      noOfRecords: "No Data available",
    },
    {
      accName: "Peer Reviewed Templates",
      noOfRecords: "No Data available",
    },
    {
      accName: "Reviewed Templates",
      noOfRecords: "No Data available",
    },
    {
      accName: "Saved Templates",
      noOfRecords: "No Data available",
    },
  ];
  const assignDocument = [
    {
      accName: "Projects",
      noOfRecords: "No Data available",
    },
    {
      accName: "Initiated",
      noOfRecords: "No Data available",
    },
    {
      accName: "Initiated from Assessment",
      noOfRecords: "No Data available",
    },
    {
      accName: "Discrepnacy",
      noOfRecords: "No Data available",
    },
  ];
  const authorExternalDocument = [
    {
      accName: "Select Document to Author",
      noOfRecords: "No Data available",
    },
    {
      accName: "Peer Reviewed External Documents",
      noOfRecords: "No Data available",
    },
    {
      accName: "Reviewed External Documents",
      noOfRecords: "No Data available",
    },
    {
      accName: "Saved External Documents",
      noOfRecords: "No Data available",
    },
    {
      accName: "Rejected External Documents",
      noOfRecords: "No Data available",
    },
    {
      accName: "Change Control",
      noOfRecords: "No Data available",
    },
    {
      accName: "Projects",
      noOfRecords: "No Data available",
    },
    {
      accName: "Initiated from Assessment",
      noOfRecords: "No Data available",
    },
  ];
  const authorDocument = [
    {
      accName: "Assigned Document",
      noOfRecords: "No Data available",
    },
    {
      accName: "Peer Reviewed Document",
      noOfRecords: "No Data available",
    },
    {
      accName: "Reviewed  Document",
      noOfRecords: "No Data available",
    },
    {
      accName: "Rejected Document",
      noOfRecords: "No Data available",
    },
  ];
  const authorMassUpload = [
    {
      accName: "Saved Mass Upload Documents",
      noOfRecords: "No Data available",
    },
  ];

  const authorContentLibrary = [
    {
      accName: "Select Content Library to Author",
      noOfRecords: "No Data available",
    },
    {
      accName: "Content Library Set to Author",
      noOfRecords: "No Data available",
    },
    {
      accName: "Peer Reviewed Content Library",
      noOfRecords: "No Data available",
    },
    {
      accName: "Reviewed Content Library",
      noOfRecords: "No Data available",
    },
    {
      accName: "Rejected Content Library",
      noOfRecords: "No Data available",
    },
    {
      accName: "Saved Content Library",
      noOfRecords: "No Data available",
    },
    {
      accName: "Completed Content Library",
      noOfRecords: "No Data available",
    },
  ];

  const editExternalDocument = [
    {
      accName: "WIP External Authoring Task",
      noOfRecords: "No Data available",
    },
  ];

  const editDocument = [
    {
      accName: "WIP Documents",
      noOfRecords: "No Data available",
    },
  ];

  const editMapping = [
    {
      accName: "Table Mapping",
      noOfRecords: "No Data available",
    },
  ];

  const editTemplateGroup = [
    {
      accName: "Active Template Group",
      noOfRecords: "No Data available",
    },
    {
      accName: "Inactive Template Group",
      noOfRecords: "No Data available",
    },
  ];

  const editTemplate = [
    {
      accName: "WIP Templates",
      noOfRecords: "No Data available",
    },
    {
      accName: "Active Templates",
      noOfRecords: "No Data available",
    },
    {
      accName: "Inactive Templates",
      noOfRecords: "No Data available",
    },
  ];

  const editContentLibraryGroup = [
    {
      accName: "Active Content Library Group",
      noOfRecords: "No Data available",
    },
    {
      accName: "Inactive Content Library Group",
      noOfRecords: "No Data available",
    },
  ];

  const editContentLibrary = [
    {
      accName: "WIP Content Library",
      noOfRecords: "No Data available",
    },
    {
      accName: "Active Content Library",
      noOfRecords: "No Data available",
    },
    {
      accName: "Inactive Content Library",
      noOfRecords: "No Data available",
    },
    {
      accName: "WIP Content Library Task",
      noOfRecords: "No Data available",
    },
  ];


  const reviewDocument = [
    {
      accName: "Select Document to Review",
      noOfRecords: "No Data available",
    },
    {
      accName: "Select Document to Peer Review",
      noOfRecords: "No Data available",
    },
  ];

  const reviewTemplate = [
    {
      accName: "Select Template to Review",
      noOfRecords: "No Data available",
    },
    {
      accName: "Select Template to Peer Review",
      noOfRecords: "No Data available",
    },
  ];

  const reviewContentLibrary = [
    {
      accName: "Select Content Library to Review",
      noOfRecords: "No Data available",
    },
    {
      accName: "Select Content Library to Peer Review",
      noOfRecords: "No Data available",
    },
  ];

  const approveDocument = [
    {
      accName: "Documents for Approval",
      noOfRecords: "No Data available",
    },
    {
      accName: "Documents Pending For Rejection Approval",
      noOfRecords: "No Data available",
    },
  ];

  const approveTemplate = [
    {
      accName: "Template for Approval",
      noOfRecords: "No Data available",
    },
    {
      accName: "Documents Pending For Rejection Approval",
      noOfRecords: "No Data available",
    },
  ];

  const approveContentLibrary = [
    {
      accName: "Content Library for Approval",
      noOfRecords: "No Data available",
    },
  ];

  const createData = (
    <>
      <div className={styles.container}>
        <div onClick={() => handleClick(" Table Mapping List", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=AJifXivb2xRi&format=png&color=000000"
            headingContent={"Mapping"}
            paraContent={
              "Map tables of requirement and executable documents to be included in Trace Matrix"
            }
          />
        </div>
        <div onClick={() => handleClick(" Create Document Metadata", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=103202&format=png&color=000000"
            headingContent={"Document Metadata "}
            paraContent={
              "Create Document Metadata to capture additional information for a document that id created in  the system"
            }
          />
        </div>
        <div onClick={() => handleClick(" Create Template Group", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=S0CCkyTpkqYY&format=png&color=000000"
            headingContent={"Template Group"}
            paraContent={"Create Template Group to organise similar templates in the system"}
          />
        </div>
        <div onClick={() => handleClick("Select Templates to Author", createTemplate)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=0mcyYaZoPqem&format=png&color=000000"
            headingContent={"Template"}
            paraContent={"Create Template that serves as a preset format for developing a document"}
          />
        </div>
        <div onClick={() => handleClick(" Create Content Library Group", approveProject)}>
          <Card
            imgLink="https://img.icons8.com/?size=100&id=107166&format=png&color=000000"
            headingContent={"Content library Group"}
            paraContent={
              "Create Content Library Groups to maintain Content Libraries in the system"
            }
          />
        </div>
        <div onClick={() => handleClick(" Create Content Library", approveProject)}>
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
        <div onClick={() => handleClick(" Select Authoring Task to Assign", assignDocument)}>
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
        <div onClick={() => handleClick(" Select Document to Author", authorExternalDocument)}>
          <Card
            imgLink=""
            headingContent={"External Document"}
            paraContent={"Author External Document without using preconfigure Templates in system"}
          />
        </div>

        <div onClick={() => handleClick(" Select Document to Author", authorDocument)}>
          <Card
            imgLink=""
            headingContent={"Document"}
            paraContent={"Author Document using preconfigured Templates in system"}
          />
        </div>
        <div onClick={() => handleClick(" Author Historical Document", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Historical Document"}
            paraContent={"Author Document using preconfigured Templates in system"}
          />
        </div>
        <div
          onClick={() =>
            handleClick(" Select Saved Documents to Upload Externally", authorMassUpload)
          }
        >
          <Card
            imgLink=""
            headingContent={"Mass Upload External"}
            paraContent={"Author multiple External Documents at once"}
          />
        </div>
        <div onClick={() => handleClick("Select Content Library", authorContentLibrary)}>
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
        <div onClick={() => handleClick(" Select Document to Edit", editExternalDocument)}>
          <Card
            imgLink=""
            headingContent={"External Document"}
            paraContent={"Edit or Terminate External Document "}
          />
        </div>
        <div onClick={() => handleClick(" Select Document to Edit", editDocument)}>
          <Card headingContent={"Document"} paraContent={"Edit or Terminate Document"} />
        </div>
        <div
          onClick={() => handleClick(" Select Historical Document Record to Edit", approveProject)}
        >
          <Card
            imgLink=""
            headingContent={" Historical Document"}
            paraContent={"Edit or Terminate Historical Document "}
          />
        </div>
        <div onClick={() => handleClick(" Edit Table Mapping", editMapping)}>
          <Card
            imgLink=""
            headingContent={"Mapping"}
            paraContent={"Edit Requirement and Executable Document Mapping"}
          />
        </div>
        <div onClick={() => handleClick("Select Document Metadata to Edit", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Document Metadata"}
            paraContent={"Edit Document Metadata details"}
          />
        </div>
        <div onClick={() => handleClick("Select Template Group to Edit", editTemplateGroup)}>
          <Card
            imgLink=""
            headingContent={"Template Group"}
            paraContent={"Edit, Deactivate, Reactivate or Terminate Template Group"}
          />
        </div>
        <div onClick={() => handleClick("Select Template to Edit", editTemplate)}>
          <Card
            imgLink=""
            headingContent={"Template"}
            paraContent={"Edit, Deactivate, Reactivate or Terminate Template"}
          />
        </div>
        <div onClick={() => handleClick(" View Content Library Group", editContentLibraryGroup)}>
          <Card
            headingContent={"Content Library Group"}
            paraContent={"Edit, Deactivate, Reactivate or Terminate Content Library Group"}
          />
        </div>
        <div onClick={() => handleClick("Select Content Library to Edit", editContentLibrary)}>
          <Card
            imgLink=""
            headingContent={"Content Library "}
            paraContent={"Edit, Deactivate, Reactivate or Terminate Content Library"}
          />
        </div>
        <div onClick={() => handleClick(" Edit Bound Template", approveProject)}>
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
        <div onClick={() => handleClick("Review Document", reviewDocument)}>
          <Card
            imgLink=""
            headingContent={"Document"}
            paraContent={"Review or Peer Review Document"}
          />
        </div>
        <div onClick={() => handleClick("Review Template", reviewTemplate)}>
          <Card
            imgLink=""
            headingContent={"Template"}
            paraContent={"Review or Peer Revoew Template"}
          />
        </div>
        <div onClick={() => handleClick(" Select Content Library to Review", reviewContentLibrary)}>
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
        <div onClick={() => handleClick(" Approve Document", approveDocument)}>
          <Card imgLink="" headingContent={"Document"} paraContent={"Approve or Reject Document"} />
        </div>
        <div onClick={() => handleClick(" Select Transfer Request to Accept", approveProject)}>
          <Card
            imgLink=""
            headingContent={"Document Transfer"}
            paraContent={"Approve or Reject Document Transfer"}
          />
        </div>
        <div onClick={() => handleClick(" Approve Template", approveTemplate)}>
          <Card imgLink="" headingContent={"Template"} paraContent={"Approve or Reject Template"} />
        </div>
        <div onClick={() => handleClick("Approve Content Library", approveContentLibrary)}>
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
