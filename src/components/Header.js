import React from "react";
import "./Header.css";
import { GoSearch } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png"
        alt="logo"
      />
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <GoSearch className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">&Orders</span>
        </div>
        <div className="header_optionBasket">
          <AiOutlineShoppingCart className="header_basket" />
          <span className="header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
