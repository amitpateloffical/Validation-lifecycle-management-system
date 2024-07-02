import React from "react";
import { FaHome, FaBox, FaSyncAlt, FaSearch, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <div className={styles.headerLeft}>
        <img src="/path-to-alkem-logo.png" alt="Alkem" className={styles.logo} />
      </div> */}
      <div className={styles.headerCenter}>
        <span>03:54 PM IST</span>
        <span>Mumbai</span>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.userDetails}>
          <span className={styles.userIcon}>GP</span>
          <span>Gaurav</span>
          <pre></pre>
          <IoIosArrowDropdownCircle style={{ fontSize: "20px" }} />
        </div>
        <div className={styles.navIcons}>
          <a href="#">
            <FaHome /> Home
          </a>
          <a href="#">
            <FaBox /> Inventory
          </a>
          <a href="#">
            <FaSyncAlt /> Refresh
          </a>
          <a href="#">
            <FaSearch /> Search
          </a>
          <a href="#">
            <FaQuestionCircle /> Help
          </a>
          <a href="#">
            <FaSignOutAlt /> Logout
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
