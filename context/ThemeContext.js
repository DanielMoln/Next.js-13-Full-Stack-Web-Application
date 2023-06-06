"use client";

import React from "react";

export const ThemeContext = React.createContext({
  theme: "light",
  toggle: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className={`theme ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
