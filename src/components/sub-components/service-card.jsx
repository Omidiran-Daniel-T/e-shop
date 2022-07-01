import React from "react";
const ServiceCard = ({ logo, header, text }) => {
  return (
    <div className="text-center my-20 px-2 md:mx-10">
      <div className="text-red-500 flex justify-center">{logo}</div>
      <div className="text-gray-700 font-semibold text-xl uppercase my-5">
        {header}
      </div>
      <div className="text-sm text-gray-500 w-80 m-auto">{text}</div>
    </div>
  );
};

export default ServiceCard;
