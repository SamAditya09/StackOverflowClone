import React from "react";
import "./LeftSidebar.css";
import Globe from "../images/Globe.svg";
import home from "../images/house-solid.svg";
import user from "../images/users-solid.svg";
import suitcase from "../images/suitcase-solid.svg";
// import { div } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <>
      <div className="left-sidebar">
        <nav className="side-nav">
          <button className="nav-btn">
            <div className="side-nav-links sec2" activeclassname="active">
              <img src={home} alt="Globe" />
              <p>Home</p>
            </div>
          </button>
          <div className="side-nav-div">
            <div className="sec2">
              <img src={Globe} alt="Globe" />
              <p>Public</p>
            </div>
            <button className="nav-btn">
              <div className="side-nav-links" activeclassname="active">
                <p style={{ paddingLeft: "30px" }}> Questions </p>
              </div>
            </button>
            <button className="nav-btn">
              <div
                className="side-nav-links"
                activeclassname="active"
                style={{ paddingLeft: "40px" }}
              >
                <p>Tags</p>
              </div>
            </button>
            <button className="nav-btn">
              <div
                className="side-nav-links"
                activeclassname="active"
                style={{ paddingLeft: "40px" }}
              >
                <p>Users</p>
              </div>
            </button>
          </div>
          <button className="nav-btn">
            <div
              to="/"
              className="side-nav-links sec2"
              activeclassname="active"
            >
              <img src={user} alt="Globe" />
              <p>Collectives</p>
            </div>
          </button>
          <button className="nav-btn">
            <div
              to="/"
              className="side-nav-links sec2"
              activeclassname="active"
            >
              <img src={suitcase} alt="Globe" />
              <p>Jobs</p>
            </div>
          </button>
        </nav>
      </div>
    </>
  );
};

export default LeftSidebar;
