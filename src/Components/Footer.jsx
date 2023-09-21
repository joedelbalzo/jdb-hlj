import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",

        fontSize: "calc(4px + 1vw)",
        color: "rgba(20, 30, 70, .5)",
      }}
    >
      © Copyright 2023 Hayley Jozwiak. Website designed by{" "}
      <a
        href="https://www.joedelbalzo.com"
        style={{ color: "inherit", textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Joe Del Balzo
      </a>
    </footer>
  );
};

export default Footer;
