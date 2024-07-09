import React from "react";
import styles from "./Profile.module.css";

export default function Profile() {

  return (
    <div className={styles.profileContainer}>
      <form className={styles.form}>
        <div className={styles.section}>
          <h5>Change Profile</h5>
          <div className={styles.formGroup}>
            <label>Primary Site</label>
            <input type="text" defaultValue="Mumbai" />
          </div>
          <div className={styles.formGroup}>
            <label>User ID</label>
            <input type="text" defaultValue="nirmala.chhimwal" />
          </div>
          <div className={styles.formGroup}>
            <label>First Name</label>
            <input type="text" defaultValue="Nirmala" />
          </div>
          <div className={styles.formGroup}>
            <label>Last Name</label>
            <input type="text" defaultValue="Chhimwal" />
          </div>
          <div className={styles.formGroup}>
            <label>Time Zone</label>
            <select defaultValue="(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi">
              <option>(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
              {/* Add other time zones as needed */}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input type="text" />
          </div>
          <div className={styles.formGroup}>
            <label>Address</label>
            <input type="text" />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" defaultValue="nirmala.chhimwal@connexo.io" />
          </div>
          <div className={styles.formGroup}>
            <label>Upload Picture</label>
            <input type="file" />
          </div>
          <div className={styles.formGroup}>
            <label>Default Landing</label>
            <select defaultValue="Task List">
              <option>Task List</option>
              {/* Add other options as needed */}
            </select>
          </div>
        </div>

        <div className={styles.section}>
          <h5>Change Login Password</h5>
          <div className={styles.formGroup}>
            <label>Current Password</label>
            <input type="password" />
          </div>
          <div className={styles.formGroup}>
            <label>Enter Password</label>
            <input type="password" />
          </div>
          <div className={styles.formGroup}>
            <label>Re-enter Password</label>
            <input type="password" />
          </div>
        </div>

        <div className={styles.section}>
          <h5>Change Offline Password</h5>
          <div className={styles.formGroup}>
            <label>Enter Offline Password</label>
            <input type="password" />
          </div>
          <div className={styles.formGroup}>
            <label>Re-enter Offline Password</label>
            <input type="password" />
          </div>
        </div>

        <div className={styles.section}>
          <h5>Change Transfer Task - During Out-of-office</h5>
          <div className={styles.formGroup}>
            <label>Enter Password</label>
            <input type="password" />
          </div>
          <div className={styles.formGroup}>
            <label>Re-enter Password</label>
            <input type="password" />
          </div>
        </div>

        <div className={styles.formGroup2}>
          <button className={styles.submitButton} type="submit">
            Submit
          </button>
          <button className={styles.resetButton} type="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

