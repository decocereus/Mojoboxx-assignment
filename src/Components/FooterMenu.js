import { useState } from "react";
import "./FooterMenu.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { TbCirclesRelation } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";

const FooterMenu = () => {
  const [activeItem, setActiveItem] = useState("home");
  const handleClick = (menuItem) => {
    console.log(menuItem);
    setActiveItem(menuItem);
  };
  return (
    <div className="footerMenuContainer">
      <div className="menuItems">
        <div className="home">
          <button
            className={activeItem === "home" ? "menuIcon active" : "menuIcon"}
            onClick={() => {
              handleClick("home");
            }}
          >
            <AiOutlineHome />
          </button>
          <span className="menuText">Home</span>
        </div>
        <div className="trips">
          <button
            className={activeItem === "trips" ? "menuIcon active" : "menuIcon"}
            onClick={() => {
              handleClick("trips");
            }}
          >
            <BsBriefcase />
          </button>
          <span className="menuText">My Trips</span>
        </div>
        <div className="offers">
          <button
            className={activeItem === "offers" ? "menuIcon active" : "menuIcon"}
            onClick={() => {
              handleClick("offers");
            }}
          >
            <TbCirclesRelation />
          </button>
          <span className="menuText">Offers</span>
        </div>
        <div className="account">
          <button
            className={
              activeItem === "account" ? "menuIcon active" : "menuIcon"
            }
            onClick={() => {
              handleClick("account");
            }}
          >
            <BsPerson />
          </button>
          <span className="menuText">Account</span>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
