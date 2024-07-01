import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.content}>
      <div className={styles.tabs}>
        <button className={styles.activeTab}>TASK LIST</button>
        <button>DASHBOARD</button>
      </div>
      <div className={styles.taskList}>
        <div className={styles.taskHeader}>
          <span>My Task</span>
          <span>Task</span>
        </div>
        <div className={styles.taskContent}>
          <span className={styles.noData}>No Data Available</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
