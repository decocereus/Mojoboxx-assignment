import React from "react";
import "./SwitchToApp.css";
import { PiAirplaneTakeoffThin, PiAirplaneLandingThin } from "react-icons/pi";
const SwitchToApp = () => {
  return (
    <div className="switchToAppContainer">
      <img
        className="backgroundImage"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV8GfpeRId990RRfW6zPtsx2MGq1lys29evQ&usqp=CAU"
      />

      <div className="textButtonContainer">
        <h3>Best deals are on the App!</h3>
        <h4>17% off on first hotel booking using CTAPP</h4>
        <button className="switchButton">Switch to app</button>
      </div>
      <div className="plane">
        <span className="planeTakeOff">
          <PiAirplaneTakeoffThin />
        </span>
        <span className="planeLand">
          <PiAirplaneLandingThin />
        </span>
      </div>
    </div>
  );
};

export default SwitchToApp;
