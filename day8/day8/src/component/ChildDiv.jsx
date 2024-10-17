import React from "react";

const ChildDiv = ({ childColor }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        backgroundColor: childColor,
      }}
    >
      {childColor ? `Child Color: ${childColor}` : "No color selected"}
      <br />
      <p>Child div component</p>
    </div>
  );
};

export default ChildDiv;
