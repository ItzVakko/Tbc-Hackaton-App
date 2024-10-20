import React, { useState } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import pfpPicture from "../Assets/Images/pfp.webp";

import "../styles/AllForOnePage.css";

const AllForOnePage = () => {
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState();

  const handleGoalChange = (event) => {
    setGoalName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setTargetAmount(event.target.value);
  };

  return (
    <div className="joint">
      <div className="joint-balance">
        <div>
          <h2>ყველა ერთისთვის</h2>
          <p>დასაგროვებელი თანხა</p>
          <h1>
            {targetAmount} <span>₾</span>
          </h1>
          <input
            type="number"
            value={targetAmount}
            onChange={handleAmountChange}
            placeholder="შეიყვანეთ თანხა"
            style={{ marginTop: "10px", padding: "5px" }}
          />
        </div>

        <div className="joint-cards-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="joint-progress">
        <h3>
          გამოწვევა დაიწყო!{" "}
          <FontAwesomeIcon icon={faBolt} style={{ color: "aqua" }} />
        </h3>
        <h2>
          თქვენი მიზანი: <span style={{ marginLeft: "10px" }}>{goalName}</span>
        </h2>

        {/* Input field to edit the goal name */}
        <input
          type="text"
          value={goalName}
          onChange={handleGoalChange}
          placeholder="შეიყვანეთ მიზანი"
          style={{ marginTop: "10px", padding: "5px" }}
        />

        <div className="joint-progress-bar">
          <div className="joint-progress-percent">
            <h5>40%</h5>
          </div>
        </div>
      </div>
      <div className="joint-players">
        <div className="joint-players-title">
          <h2>განაწილება</h2>
          <div className="joint-players-add">
            <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
          </div>
        </div>

        <div className="joint-players-progress-money">
          <div>
            <div
              style={{
                height: "25%",
              }}
            ></div>
            25%
          </div>
          <div>
            <div
              style={{
                height: "43%",
              }}
            ></div>
            43%
          </div>
          <div>
            <div style={{ height: "3%" }}></div>3%
          </div>
          <div>
            <div style={{ height: "10%" }}></div>10%
          </div>
          <div>
            <div style={{ height: "59%" }}></div>59%
          </div>
        </div>

        <div className="joint-players-avatars">
          <div className="joint-first-avatar">
            <img src={pfpPicture} alt="profile pic" />
            <p>ლაშა</p>
          </div>
          <div className="joint-first-avatar">
            <img src={pfpPicture} alt="profile pic" />
            <p>კოტე</p>
          </div>
          <div className="joint-first-avatar">
            <img src={pfpPicture} alt="profile pic" />
            <p>ნუცა</p>
          </div>
          <div className="joint-first-avatar">
            <img src={pfpPicture} alt="profile pic" />
            <p>ვაკო</p>
          </div>
          <div className="joint-first-avatar">
            <img src={pfpPicture} alt="profile pic" />
            <p>მარი</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllForOnePage;
