import React from "react";

const ColorBox = ({ color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="border-2 w-75 h-75  mt-6 justify-center items-center text-center content-center m-auto rounded-lg"
    >
      {color.toUpperCase()}
    </div>
  );
};

export default ColorBox;
