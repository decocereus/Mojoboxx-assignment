import React from "react";
import "./Header.css";
import SwitchToApp from "./SwitchToApp";
import { BsPerson } from "react-icons/bs";
import { IconContext } from "react-icons";

const Header = () => {
  const loginIcon = (
    <IconContext.Provider
      value={{
        style: { verticalAlign: "middle", fontSize: "1.2em" },
      }}
    >
      <BsPerson />
    </IconContext.Provider>
  );
  return (
    <div className="headerContainer">
      <SwitchToApp />
      <div className="logoSignInContainer">
        <img
          className="logo"
          src="https://static.timesprime.com/2x/cleartrip-logo-box.png?v=4"
        />
        <div className="signInButtonContainer">
          <span className="buttonLogo">{loginIcon}</span>
          <span className="buttonText">Login</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
