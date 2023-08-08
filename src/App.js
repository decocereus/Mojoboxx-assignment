import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import FooterMenu from "./Components/FooterMenu";

const AppLayout = () => {
  return (
    <div className="globalContainer">
      <Header />
      <Body />
      <FooterMenu />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
