import React from "react";

const Display = ({ display }) => {
  let result = display.slice(1);

  return (
    <div id="calculation">
      <div id="display">{display[0] === "=" ? result : display}</div>
    </div>
  );
};

export default Display;
