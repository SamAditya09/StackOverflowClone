import React from "react";
import "./RightSidebar.css";
import Linked from "./Linked.jsx";
import Related from "./Related.jsx";

const RightSidebar = () => {
  return (
    <>
      <div className="right-side">
        <Linked />
        <Related />
      </div>
    </>
  );
};

export default RightSidebar;
