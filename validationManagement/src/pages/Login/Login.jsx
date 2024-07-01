import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { CiLogin } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { IoKeySharp } from "react-icons/io5";
import { BiReset } from "react-icons/bi";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const handleReset = () => {
    navigate("/reset");
  }

  const handleSignUp = () => {
    navigate("/signup");
  }

  const handleContactAdmin = () => {
    navigate("/contactadmin");
  }

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          {/* <img src="/vidyaGxp_logo.png" alt="Alkem" className={styles.logo} /> */}
          <h3>VALIDATION LIFECYCLE MANAGEMENT SYSTEM</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src="https://img.freepik.com/premium-vector/woman-scientist-is-looking-through-microscope-vector-cartoon-flat-style-illustration_357257-1411.jpg?w=900"
              alt="Scientist"
              className={styles.scientistImage}
            />
          </div>
          <div className={styles.formContainer}>
            <input type="text" placeholder="Username" className={styles.inputField} />
            <input type="password" placeholder="Password" className={styles.inputField} />
            <div className={styles.buttonContainer}>
              <button className={styles.loginButton} onClick={handleLogin}>
                {/* <CiLogin />  */}
                Login
              </button>
              <button className={styles.resetButton} onClick={handleReset}>
                {/* <BiReset /> */}
                Reset
              </button>
            </div>
            <div className={styles.links}>
              <a href="#" className={styles.link} onClick={handleSignUp}>
                <p>
                  <CiLogin />{" "}
                </p>
                Sign Up
              </a>
              <a href="#" className={styles.link} onClick={handleContactAdmin}>
                <p>
                  <RiAdminLine />
                </p>
                Contact Admin
              </a>
              <a href="#" className={styles.link} onClick={handleForgotPassword}>
                <p>
                  <IoKeySharp />
                </p>
                Forgot Password
              </a>
            </div>
            <div className={styles.footer}>
              <span>Powered by</span>
              <img src="/vidyaGxp_logo.png" alt="ValGenesis" className={styles.vgxpLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

