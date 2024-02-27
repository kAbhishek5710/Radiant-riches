import React from "react";
import "./Header.scss";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="HeaderNav">
      <div className="content">
        <form className="searchBar">
          <FaSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
        </form>
        <div className="right_box">
        <a href="#">Categories</a>
        <a href="#">Website Builders</a>
        <a href="#">Today's Deals</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
