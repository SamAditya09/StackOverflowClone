import React from "react";
import logo from "../images/navlogo.svg";
import "./navbar.css";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <section className="navbar_wrapper">
          <div className="navbar">
            <div className="logo">
              <img src={logo} alt="stack-over-flow-logo" />
            </div>
            <div className="search_wrapper">
              <AiOutlineSearch className="search_icon" size={20} />
              <input
                type="text"
                className="search_input"
                placeholder="Search"
              />
            </div>
            <div className="menu">
              <a href="/">About</a>
              <a href="/">Products</a>
              <a href="/">For teams</a>
            </div>
            <AiOutlineMenu className="menu_bar" size={20} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
