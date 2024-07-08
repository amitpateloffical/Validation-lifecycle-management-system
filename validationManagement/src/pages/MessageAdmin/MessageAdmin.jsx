import React from "react";
import styles from "./MessageAdmin.module.css";

export default function MessageAdmin() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.miniContainer}>
          <h4>Message To Administrator</h4>
          <label htmlFor="User ID">User ID</label>
          <input type="text" placeholder="Username" className={styles.inputField} />
          <label htmlFor="User ID">Subject</label>
          <select type="" className={styles.inputField}>
            <option value="">Choose a subject</option>
            <option value="generalInquiry">Account Reactivation Request</option>
            <option value="bugReport">Login Password reset request</option>
            <option value="featureRequest">Message to Admin</option>
            <option value="technicalSupport">Technical Support</option>
          </select>
          <label htmlFor="User ID">Message to Admin</label>
          <input type="text" className={styles.inputField} style={{height:"100px"}}/>
          <div></div>
          <div className={styles.buttonContainer}>
            <button className={styles.resetButton}>Reset</button>
            <button className={styles.loginButton}>Submit</button>
            <button className={styles.resetButton}>Back</button>
          </div>
        </div>
      </div>
    </>
  );
}
