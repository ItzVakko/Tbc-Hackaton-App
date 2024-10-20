import React from "react";
import { Transactions } from "./Transactions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faHeart } from "@fortawesome/free-solid-svg-icons";

import "../styles/HomePage.css";

export const HomePage = () => {
  return (
    <div className="home">
      <div className="card">
        <h4>
          სულ ხელმისაწვდომი <FontAwesomeIcon icon={faEyeSlash} />
        </h4>
        <div className="card-info">
          <h1>480</h1>
          <h2>.95</h2>
          <p>₾</p>
        </div>
        <div className="card-details">
          <div className="card-img-info">
            <div className="card-img-container">
              <div className="card-img"></div>
              <div className="img-info">
                <h4>
                  <strong>ბარათი</strong>
                </h4>
                <h5 className="img-info-h4">MC STANDARD</h5>
              </div>
            </div>
            <div className="card-img-cash">
              <h4>480</h4>
              <h5>.95</h5>
              <p>₾</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ertguli">
        <div className="ertguli-header">
          <div className="ertguli-img-container">
            <div className="ertguli-img"></div>
            <h3>Ertguli</h3>
          </div>
          <div className="ertguli-points">
            <h4>0.69</h4>
            <p>₾</p>
          </div>
        </div>
        <div className="ertguli-hearts">
          <FontAwesomeIcon icon={faHeart} className="ertguli-hearts-full" />
          <FontAwesomeIcon icon={faHeart} className="ertguli-hearts-full" />
          <FontAwesomeIcon icon={faHeart} className="ertguli-hearts-empty" />
        </div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <div className="stages">
          <p>II ეტაპი</p>
          <p>III ეტაპი</p>
        </div>
        <button className="ertguli-btn">გაიგე მეტი</button>
      </div>

      <Transactions />
    </div>
  );
};
