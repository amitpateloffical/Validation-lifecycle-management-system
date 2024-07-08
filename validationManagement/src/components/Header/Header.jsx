import React, { useState } from "react";
import { FaHome, FaBox, FaSyncAlt, FaSearch, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(true);
  };
  const handleDropdownToggle2 = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerCenter}>
        <span>
          {new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </span>
        <span>
          {Intl.DateTimeFormat("en-US", { timeZoneName: "long" }).resolvedOptions().timeZone}
        </span>
      </div>
      <div className={styles.headerRight}>
        <div
          className={styles.userDetails}
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle2}
        >
          <span className={styles.userIcon}>AG</span>
          <span>Amit Guru</span>
          {isDropdownOpen && (
            <div
              className={styles.dropdown}
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownToggle2}
            >
              <div className={styles.dropdownDiv}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className={styles.userIcon2}>AG</div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <p>Amit Guru</p>
                  </div>
                </div>
                <button>Account</button>
                <button>View Profile</button>
                <button>About</button>
              </div>
            </div>
          )}
          <IoIosArrowDropdownCircle style={{ fontSize: "20px" }} />
        </div>
        <div className={styles.navIcons}>
          <NavLink to={"/dashboard"}>
            <FaHome /> Home
          </NavLink>
          <NavLink to={"/inventory"}>
            <FaBox /> Inventory
          </NavLink>
          <NavLink onClick={() => window.location.reload(true)}>
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
