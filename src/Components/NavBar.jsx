import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import TbcIcon from "../Assets/Images/tbc-icon.png";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";

import "../styles/NavBar.css";
import NavBarResponsive from "./NavBarResponsive";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <nav className="navbar-container">
        <FontAwesomeIcon
          icon={faBars}
          className="burger-menu-icon"
          onClick={handleClick}
        />

        <img src={TbcIcon} alt="tbc-icon" className="tbc-icon" />

        <FontAwesomeIcon icon={faQrcode} className="qr-code-icon" />
      </nav>

      <NavBarResponsive setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default NavBar;
