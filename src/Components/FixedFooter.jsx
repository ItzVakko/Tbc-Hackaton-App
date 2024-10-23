import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import NovaAssistant from "../Assets/Images/nova-assistant.png";
import { Link } from "react-router-dom";

import "../styles/FixedFooter.css";

const FixedFooter = ({ isFirstTime, setIsFirstTime }) => {
  const handleClick = () => {
    setIsFirstTime(false);
  };

  return (
    <div className="footer">
      <div className="footer-component">
        <FontAwesomeIcon icon={faHouse} className="icon" />
        <a href="/">მთავარი</a>
      </div>
      <div className="footer-component">
        <FontAwesomeIcon icon={faMobileScreen} className="icon" />
        <p>შევსება </p>
      </div>
      <Link className="footer-component" to="/allforone" onClick={handleClick}>
        {isFirstTime}
        <img
          src={NovaAssistant}
          alt="nova assistant logo"
          className="nova-assistant"
        />
      </Link>
      <div className="footer-component">
        <div className="arrows">
          <FontAwesomeIcon icon={faArrowUp} className="icon" />
          <FontAwesomeIcon icon={faArrowDown} className="icon" />
        </div>
        <p>გადარიცხვა </p>
      </div>
      <div className="footer-component">
        <FontAwesomeIcon icon={faClipboard} className="icon" />
        <p>კომუნალური </p>
      </div>
    </div>
  );
};

export default FixedFooter;
