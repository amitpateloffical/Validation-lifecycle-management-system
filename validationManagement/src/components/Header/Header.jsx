import React from "react";
import { FaHome, FaBox, FaSyncAlt, FaSearch, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

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
          <NavLink to={"/dashboard"}>
            <FaHome /> Home
          </NavLink>
          <NavLink to={"/inventory"}>
            <FaBox /> Inventory
          </NavLink>
          <NavLink  onClick={() => window.location.reload(true)}>
            <FaSyncAlt /> Refresh
          </NavLink>
          <NavLink to={"/search"}>
            <FaSearch /> Search
          </NavLink>
          <NavLink to={"/help"}>
            <FaQuestionCircle /> Help
          </NavLink>
          <NavLink to={"/"}>
            <FaSignOutAlt /> Logout
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
