import React from "react";

const Key = ({ name, content, onClick }) => {
  return (
    <button id={name} onClick={onClick}>
      {content}
    </button>
  );
};

export default Key;
