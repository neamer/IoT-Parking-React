import React from "react";
import "./AppHeader.component.css";

type Props = {};

function AppHeader({}: Props) {
  return (
    <div className="header">
      <img src={require("../../assets/img/logo.png")} alt="logo" />
    </div>
  );
}

export default AppHeader;
