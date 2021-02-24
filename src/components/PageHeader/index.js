import React from "react";

import imgLogo from "../../assets/images/lapizzeria-logo.png";

import "./styles.css";

const PageHeader = () => {
  return (
    <header className="page-header">
      <h1>La Pizzeria</h1>
      <img src={imgLogo} alt="logo" />
    </header>
  );
};

export default PageHeader;
