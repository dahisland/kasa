import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header id="header">
      <picture>
        <img src="./img/logo-kasa.svg" alt="logo" />
      </picture>
      <Navigation />
    </header>
  );
};

export default Header;
