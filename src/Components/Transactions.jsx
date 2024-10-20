import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import "../styles/Transactions.css";


export const Transactions = () => {

    

  return (
    <div className="transactions">
      <div className="transaction-date">
        <h3>ჩემი ხარჯები</h3>
        <div className="date">
          <p>01</p>
          <FontAwesomeIcon icon={faArrowRight} className="icon" />
          <p>19</p>
          <p>ოქტ, 2024</p>
          <FontAwesomeIcon icon={faEdit} className="icon" />
        </div>
      </div>
      <div className="transaction-amount">
        <div className="circle"></div>
        <div className="amount-maximum">
          <p>სულ ხარჯი</p>
          <h2>1 023.10 ₾</h2>
        </div>
      </div>
      <div className="transaction-history">
        <div className="spentmoney">
          <div className="transaction-location">
            <div className="dot" style={{ backgroundColor: "aqua" }}></div>
            <p>გადარიცხვები</p>
          </div>
          <p>850.00 ₾</p>
        </div>
        <div className="spentmoney">
          <div className="transaction-location">
            <div className="dot" style={{ backgroundColor: "#AA336A" }}></div>
            <p>გართობა</p>
          </div>
          <p>850.00 ₾</p>
        </div>

        <div className="spentmoney">
          <div className="transaction-location">
            <div className="dot" style={{ backgroundColor: "green" }}></div>
            <p>საყიდლები</p>
          </div>
          <p>850.00 ₾</p>
        </div>
        <div className="spentmoney">
          <div className="transaction-location">
            <div className="dot" style={{ backgroundColor: "orange" }}></div>
            <p>სხვა</p>
          </div>
          <p>850.00 ₾</p>
        </div>
      </div>
      <div className="all-transactions">
        <hr className="customline" />
        <p>ყველა ხარჯი</p>
      </div>
    </div>
  );
};
