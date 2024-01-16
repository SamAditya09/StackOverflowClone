import React from "react";
import "./RightSidebar.css";
import Widget from "./widget.jsx";
import WidgetTags from "./WidgetTags.jsx";

const RightSidebar = () => {
  return (
    <>
    <div className="right-sidebar">
      <Widget />
      <WidgetTags />
    </div>
    </>
  );
};

export default RightSidebar;