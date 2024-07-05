import React, { useState } from "react";
import Tab from "../../components/Tabs/Tabs";
import styles from "./System.module.css";
import Card from "../../components/Cards/Card";
import AccordionUsage from "../../components/Accordion/Accordion";
import AccordionContainer from "../../components/AccordionContainer/AccordionContainer";

export default function System() {
  const [openPage, setOpenPage] = useState(false);
    const mappingData = [
      {
        accName: "Active Mapping Keyword",
        noOfRecords: "33",
      },
      {
        accName: "Inactive Mapping Keyword",
        noOfRecords: "No Record Available",
      },
    ];
  // const
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
      {openPage ? (
        <div>
          <div className={styles.overlay}>
            <AccordionContainer
              setOpenPage={setOpenPage}
              heading="View Mapping Keyword"
              accordionData={mappingData}
            />
          </div>
        </div>
      ) : (
        <div onClick={() => setOpenPage(true)} className={styles.content}>
          <Tab tabs={tabs} />
        </div>
      )}
    </>
  );
}
