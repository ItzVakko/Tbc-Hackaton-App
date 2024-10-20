import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import TestPfpIcon from "../Assets/Images/test-pfp-icon.png";
import { faHouse, faWallet, faCar } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineNetworkCell } from "react-icons/md";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsClipboard2Heart } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { LuFileCheck } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLariSign } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import "../styles/NavBarResponsive.css";

const NavBarResponsive = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();

  return (
    <div
      className="nav-res-container"
      style={{
        opacity: isOpen ? "1" : "0",
        transform: isOpen ? "translateX(0)" : "translateX(-1000%)",
      }}
    >
      <div className="nav-res-header-cont">
        <img
          src={TestPfpIcon}
          alt="pfp icon"
          className="nav-res-header-picture"
        />
        <p className="nav-res-header-username">ვაკო ქობულაშვილი</p>
        <FontAwesomeIcon
          icon={faRightToBracket}
          className="nav-res-exit-icon"
          onClick={handleClick}
        />
      </div>

      <div className="nav-res-main-cont">
        <div>
          <button onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faHouse} />
            მთავარი
          </button>
          <button>
            <FontAwesomeIcon icon={faWallet} />
            ჩემი პროდუქტები
          </button>
          <button>
            <MdOutlineNetworkCell />
            ინვესტიციები
          </button>
          <button>
            <HiMiniArrowsUpDown />
            გადარიცხვები
          </button>
          <button>
            <FontAwesomeIcon icon={faCar} />
            პარკირება და ჯარიმები
          </button>
          <button>
            <FaRegFileAlt />
            ტრანზაქციები
          </button>
          <button>
            <MdOutlineAnalytics />
            ჩემი ფინანსები
          </button>
        </div>

        <div>
          <button>
            <BsClipboard2Heart />
            ერთგული
          </button>
          <button>
            <BsBookmark />
            პროდუქტების აქტივაცია
          </button>
          <button>
            <LuFileCheck />
            ჩემი განაცხადები
          </button>
          <button>
            <FaRegEnvelope />
            შეტყობინებები
          </button>
          <button>
            <FaLariSign />
            ვალუტის კურსები
          </button>
          <button>
            <CiLocationOn />
            ბანკომატები
          </button>
        </div>
        <div
          style={{
            border: 0,
            paddingTop: "5px",
            borderBottomLeftRadius: "30px",
            borderRight: "1px solid #555555",
          }}
        >
          <button>
            <MdOutlineSettings />
            პარამეტრები
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBarResponsive;
