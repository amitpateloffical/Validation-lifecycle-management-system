import React from "react";
import styles from "./ForgotPassword.module.css";

export default function ForgotPasword() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.miniContainer}>
          <h4>Forgot Password</h4>
          <label htmlFor="User ID">E-Mail</label>
          <input type="email" placeholder="Username" className={styles.inputField} />
          <div></div>
          <div className={styles.buttonContainer}>
            {/* <button className={styles.resetButton}>Reset</button> */}
            <button className={styles.loginButton}>Submit</button>
            {/* <button className={styles.resetButton}>Back</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
