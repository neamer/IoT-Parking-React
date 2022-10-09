import React, { useState } from "react";
import HelperPopup from "../helper/HelperPopup";
import "./AppHeader.component.css";

type Props = {};

function AppHeader({}: Props) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="header">
      <img src={require("../../assets/img/logo.png")} alt="logo" /> <br />
      Kliknite na parking mjesto kako biste simulirali dolazak/odlazak
      automobila
      <div className="helper-button" onClick={() => setShowPopup(true)}>
        ?
      </div>
      <div
        className="open-viewer"
        onClick={() =>
          window.open("https://wonderful-mochi-66c32b.netlify.app/")
        }
      >
        Otvori <br /> preglednik
      </div>
      {showPopup && <HelperPopup popupHandler={setShowPopup}></HelperPopup>}
    </div>
  );
}

export default AppHeader;
