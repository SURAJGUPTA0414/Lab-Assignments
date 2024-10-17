import React from "react";
import ChildDiv from "./ChildDiv"; 

const ParentDiv = ({ parentColor, childColor }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        backgroundColor: parentColor,
      }}
    >
      <h3>Parent div component</h3>
      <ChildDiv childColor={childColor} />
    </div>
  );
};

export default ParentDiv;
