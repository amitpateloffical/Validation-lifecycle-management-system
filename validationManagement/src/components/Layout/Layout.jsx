import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Layout.module.css";
import Dashboard from "../../pages/Dashboard/Dashboard";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
