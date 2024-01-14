import React from "react";
import logo from "../images/logo.png";
import search from "../images/search-solid.svg";
import "./navbar.css";
import bars from "../images/bars-solid.svg";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="navbar">
          <button className="slide-in-icon">
            <img src={bars} alt="bars" width="15" />
          </button>
          <div className="navbar-1">
            <div to="#" className="nav-item nav-logo">
              <img src={logo} alt="logo" />
            </div>
            <form>
              <input type="text" id="search" placeholder="Search..." />
              <img
                src={search}
                alt="search"
                width="18"
                className="search-icon"
              />
            </form>
            <div to="#" className="nav-item nav-btn res-nav">
              About
            </div>
            <div to="#" className="nav-item nav-btn res-nav">
              Products
            </div>
            <div to="#" className="nav-item nav-btn res-nav">
              For Teams
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
