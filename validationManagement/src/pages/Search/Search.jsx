import React from "react";
import styles from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";
import { Accordion, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function Search() {
  return (
    <div>
      <h5>Advanced Search</h5>

      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.searchFor}>
            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="searchfor-content"
                id="searchfor-accordion"
              >
                <p>Search For</p>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.formGroup}>
                  <label htmlFor="module">Module</label>
                  <select id="module">
                    <option value="vaultManager">Administration Manager</option>
                    <option value="vaultManager">Configuration Manager</option>
                    <option value="vaultManager">Content Manager</option>
                    <option value="vaultManager">Execution Manager</option>
                    <option value="vaultManager">Vault Manager</option>
                    <option value="vaultManager">Risk Manager</option>
                    <option value="vaultManager">Requirement Manager</option>
                    <option value="vaultManager">Assessment Manager</option>
                    <option value="vaultManager">System Manager</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="applicableFor">Applicable For</label>
                  <select id="applicableFor">
                    <option value="package">Template</option>
                    <option value="package">Historical Document</option>
                    <option value="package">Authoring</option>
                    <option value="package">Template Group</option>
                    <option value="package">Generic Content Library</option>
                    <option value="package"> Content Library Group</option>
                    <option value="package"> Entity Content Group</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="searchText">Search Text</label>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <input id="searchText" type="text" defaultValue="" placeholder="Search Text" />
                    <button className={styles.searchButton}>
                      <IoIosSearch />
                    </button>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={styles.configureDisplayFields}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="searchfor-content"
                id="searchfor-accordion"
              >
                <p>Configure Display Fields</p>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <input type="checkbox" id="all" />
                  <label htmlFor="all">All</label>
                </div>
                <div>
                  <input type="checkbox" id="packageGroupName" />
                  <label htmlFor="packageGroupName">Package Group Name</label>
                </div>
                <div>
                  <input type="checkbox" id="createdBy" />
                  <label htmlFor="createdBy">Created By</label>
                </div>
                <div>
                  <input type="checkbox" id="packageName" />
                  <label htmlFor="packageName">Package Name</label>
                </div>
                <div>
                  <input type="checkbox" id="createdOn" />
                  <label htmlFor="createdOn">Created On</label>
                </div>
                <div>
                  <input type="checkbox" id="status" checked />
                  <label htmlFor="status">Status</label>
                </div>
                <div>
                  <input type="checkbox" id="description" checked />
                  <label htmlFor="description">Description</label>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={styles.searchingParameter}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="searchfor-content"
                id="searchfor-accordion"
              >
                <p>Searching Parameter</p>
              </AccordionSummary>
              <AccordionDetails>
                {/* <div>
                  <label>Search in:</label>
                  <button className={styles.metaDataButton}>MetaData</button>
                </div> */}
                <div>
                  <input type="checkbox" id="all" checked />
                  <label htmlFor="all">All</label>
                </div>
                <div>
                  <input type="checkbox" id="packageGroupName" checked />
                  <label htmlFor="packageGroupName">Package Group Name</label>
                </div>
                <div>
                  <input type="checkbox" id="createdBy" checked />
                  <label htmlFor="createdBy">Created By</label>
                </div>
                <div>
                  <input type="checkbox" id="packageName" checked />
                  <label htmlFor="packageName">Package Name</label>
                </div>
                <div>
                  <input type="checkbox" id="description" checked />
                  <label htmlFor="description">Description</label>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.rightContainer}>
          <p className={styles.noData}>No Data Available</p>
        </div>
      </div>
    </div>
  );
}
