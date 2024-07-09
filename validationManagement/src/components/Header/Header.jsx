import React, { useState } from "react";
import { FaHome, FaBox, FaSyncAlt, FaSearch, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(true);
  };
  const handleDropdownClose = () => {
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
          className={styles.userDetailsContainer}
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownClose}
        >
          <div className={styles.userDetails}>
            <span className={styles.userIcon}>AG</span>
            <span>Amit Guru</span>
            <IoIosArrowDropdownCircle style={{ fontSize: "20px" }} />
          </div>
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownDiv}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className={styles.userIcon2}>AG</div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <p>Amit </p>
                    <p>&nbsp;Guru</p>
                  </div>
                </div>
                {/* <NavLink>Account</NavLink> */}
                <NavLink
                  to={"/profile"}
                  style={{
                    background: "#003366",
                    color: "white",
                    padding: "10px",
                    // textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "#0056b3")}
                  onMouseLeave={(e) => (e.target.style.background = "#003366")}
                >
                  View Profile
                </NavLink>
                <NavLink
                  style={{
                    background: "#003366",
                    color: "white",
                    padding: "10px",
                    // textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "#0056b3")}
                  onMouseLeave={(e) => (e.target.style.background = "#003366")}
                  onClick={handleOpen}
                >
                  About
                </NavLink>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      <img src="./vidyaGxp_logo.png" alt="" />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: "center" }}>
                      <pre>
                        <b> Version 2.1.2 </b>
                      </pre>
                      <p>
                        Copyright@2024<b> VidyaGxP Pvt Ltd.</b> All rights reserved.{" "}
                      </p>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>
          )}
        </div>
        <div className={styles.navIcons}>
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <FaHome /> <p>Home</p>
          </NavLink>
          <NavLink
            to={"/inventory"}
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <FaBox />
            <p>Inventory</p>
          </NavLink>
          <NavLink onClick={() => window.location.reload(true)}>
            <FaSyncAlt /> Refresh
          </NavLink>
          <NavLink
            to={"/search"}
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <FaSearch />
            <p>Search</p>
          </NavLink>
          {/* <NavLink
            to={"/help"}
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <FaQuestionCircle /> Help
          </NavLink> */}
          <NavLink
            to={"/"}
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <FaSignOutAlt />
            <p>Logout</p>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
