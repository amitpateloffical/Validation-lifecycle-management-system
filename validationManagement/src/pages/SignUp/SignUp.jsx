import React from "react";
import styles from "./SignUp.module.css";

export default function SignUp() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.miniContainer}>
          <h4>New User Sign Up</h4>
          <div></div>
          <label htmlFor="User ID">User ID</label>
          <input type="text" placeholder="Username" className={styles.inputField} />
          <label htmlFor="User ID">Temporary Password</label>
          <input type="password" placeholder="Password" className={styles.inputField} />
          <label htmlFor="User ID">Role</label>
          <input type="text" placeholder="role" className={styles.inputField} />
          <div className={styles.buttonContainer}>
            <button className={styles.resetButton}>Reset</button>
            <button className={styles.loginButton}>Login</button>
            <button className={styles.resetButton}>Back</button>
          </div>
        </div>
      </div>
    </>
  );
}
