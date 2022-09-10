import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header id="header">
      <div className="header_logo" aria-label="Image logo"></div>
      <Navigation />
    </header>
  );
};

export default Header;
