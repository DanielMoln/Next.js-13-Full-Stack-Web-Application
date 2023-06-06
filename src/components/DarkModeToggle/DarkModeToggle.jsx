"use client";

import React, { useContext } from "react";
import styles from "./DarkMode.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={theme === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
