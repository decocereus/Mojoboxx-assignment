import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const AppLayout = () => {
  return (
    <div className="globalContainer">
      <h1>Hello World</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
