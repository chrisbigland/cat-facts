import React from "react";
import "./Header.scss"

const Header = () => {
  return (
    <div className="headingContainer">
      <div className="heading">
        <h1 className="heading1">Cat Facts</h1>
        <p className="description">
          Click below for a selection of our favourite cat facts!
        </p>
      </div>
    </div>
  );
};

export default Header;
