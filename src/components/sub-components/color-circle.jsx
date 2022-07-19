import React from "react";
const ColorCircle = ({ color, active }) => {
  return active ? (
    <div
      className={`h-6 w-6 rounded-full flex items-center justify-center mx-2 border border-${color}-500 bg-${color}-100`}
    >
      <div className={`h-4 w-4 rounded-full bg-${color}-500`}></div>
    </div>
  ) : (
    <div className={`h-5 w-5 rounded-full mx-2 bg-${color}-500`}></div>
  );
};

export default ColorCircle;
