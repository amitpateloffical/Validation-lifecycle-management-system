import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaCogs,
  FaClipboardCheck,
  FaProjectDiagram,
  FaTasks,
  FaFileAlt,
  FaEdit,
  FaMicrophone,
} from "react-icons/fa";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="vidyaGxp_logo.png" alt="" />
      </div>
      <ul>
        <li>
          <NavLink
            to="/system"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <span>
              <FaCogs />
            </span>
            <p>System</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/assesment"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <span>
              <FaClipboardCheck />
            </span>
            <p>Assessment</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
            // activeClassName={styles.active}
          >
            <span>
              <FaProjectDiagram />
            </span>
            <p>Project</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/requirement"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <span>
              <FaTasks />
            </span>
            <p>Requirement</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/content"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <span>
              <FaFileAlt />
            </span>
            <p>Content</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/execution"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <span>
              <FaEdit />
            </span>
            <p>Execution</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/report"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <span>
              <FaMicrophone />
            </span>
            <p>Report</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
