import React from "react";

const Button = ({ name, color, setSelectedColor }) => {
  function setColor() {
    setSelectedColor(color);
  }
  return (
    <button
      onClick={setColor}
      className="p-6 border border-black rounded-lg "
      style={{ backgroundColor: color }}
    >
      {name}
    </button>
  );
};

export default Button;
