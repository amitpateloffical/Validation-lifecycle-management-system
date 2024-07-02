import React from "react";
import styles from "./Dashboard.module.css";
import Tab from "../../components/Tabs/Tabs";
import { IoIosSearch } from "react-icons/io";

const Dashboard = () => {
  const taskListData = (
    <>
      <h5>My Tasks</h5>
      <div className={styles.searchContainer}>
        <input type="search" name="" id="" placeholder="Task" className={styles.searchInput} />
        <button  className={styles.searchButton} style={{ cursor: "pointer",  }}>
          <IoIosSearch  style={{ fontSize: "25px" ,paddingRight:"5px"}}/>
          Search
        </button>
      </div>
      <p className={styles.noData}>No Data Available</p>
    </>
  );

  const dashboardData = (
    <>
      <h5>Dashboard</h5>
    </>
  );

  const tabs = [
    { label: "Task List", content: taskListData },
    { label: "Dashboard", content: dashboardData },
  ];
  return (
    <div>
      <Tab tabs={tabs} />
    </div>
  );
};

export default Dashboard;
