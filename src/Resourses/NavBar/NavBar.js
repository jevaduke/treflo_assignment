import React from "react";
import "./NavBar.css";
import cartIcon from "../Assets/cart.png";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="Heading">
        <h1>Tom's Pizzas</h1>
      </div>
      <div className="Heading-end">
        <img className="cartIcon" src={cartIcon} />
      </div>
    </div>
  );
};

export default NavBar;
