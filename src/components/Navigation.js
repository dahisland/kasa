import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="nav">
      <NavLink
        to="/"
        className={(nav) =>
          nav.isActive ? "nav_item--active" : "nav_item--inactive"
        }
      >
        <li>Accueil</li>
      </NavLink>
      <NavLink
        to="/about"
        className={(nav) =>
          nav.isActive ? "nav_item--active" : "nav_item--inactive"
        }
      >
        <li>A propos</li>
      </NavLink>
    </ul>
  );
};

export default Navigation;
