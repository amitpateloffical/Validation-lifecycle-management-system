import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import styles from "./Accordion.module.css";
import { FaThList } from "react-icons/fa";

export default function AccordionUsage(props) {
  const { accordionData } = props;
  // console.log(accordionName);

  return (
    <>
      <div className={styles.accordion}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div className={styles.accordionSummary}>
              <div className={styles.accordionSummaryLeft}>
                {/* <h6>
                <FaThList />
              </h6> */}
                <img
                  src="https://img.icons8.com/?size=100&id=67582&format=png&color=000000"
                  alt=""
                />
                <h6>|</h6>
                <h6>
                  <b>{accordionData.accName}</b>
                </h6>
              </div>
              <pre>{accordionData.noOfRecords}</pre>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th} style={{ width: "10%" }}>
                    #
                  </th>
                  <th className={styles.th}>Column Header</th>
                  <th className={styles.th}>Column Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.td}>1</td>
                  <td className={styles.td}>Accepted Criteria</td>
                  <td className={styles.td}>Description</td>
                </tr>
                <tr>
                  <td className={styles.td}>2</td>
                  <td className={styles.td}>Accepted by Vendor (Yes/No)</td>
                  <td className={styles.td}>Result with Audit Trail</td>
                </tr>
                <tr>
                  <td className={styles.td}>3</td>
                  <td className={styles.td}>Accepted Result</td>
                  <td className={styles.td}> Executable without Audit trail</td>
                </tr>
              </tbody>
            </table>
          </AccordionDetails>
        </Accordion>

        {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className={styles.accordionSummary}>
            <div className={styles.accordionSummaryLeft}>
              <img src="https://img.icons8.com/?size=100&id=67582&format=png&color=000000" alt="" />
              <h6>|</h6>
              <h6>
                <b>Inactive Mapping Keyword</b>
              </h6>
            </div>
            <pre>(No Data Available)</pre>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th} style={{ width: "10%" }}>
                  #
                </th>
                <th className={styles.th}>Column Header</th>
                <th className={styles.th}>Column Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.td}>1</td>
                <td className={styles.td}>Accepted Criteria</td>
                <td className={styles.td}>Description</td>
              </tr>
              <tr>
                <td className={styles.td}>2</td>
                <td className={styles.td}>Accepted by Vendor (Yes/No)</td>
                <td className={styles.td}>Result with Audit Trail</td>
              </tr>
              <tr>
                <td className={styles.td}>3</td>
                <td className={styles.td}>Accepted Result</td>
                <td className={styles.td}> Executable without Audit trail</td>
              </tr>
            </tbody>
          </table>
        </AccordionDetails>
      </Accordion> */}

        {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion> */}
        {/* <Accordion defaultExpanded>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            >
            Accordion Actions
            </AccordionSummary>
            <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
            </AccordionDetails>
            <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
            </AccordionActions>
        </Accordion> */}
      </div>
    </>
  );
}
