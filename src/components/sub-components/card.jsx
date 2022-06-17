import React from "react";
import Stars from "./stars";
const Card = ({ data }) => {
  return (
    <div className="bg-yellow-00 h-96 w-80 rounded border-4 p-2 m-10">
      <div className="bg-teal-00 h-3/5">
        <div
          className={
            data.hot
              ? "text-xs p-1 m-2 inline tracking-wide text-white font-semibold bg-red-500"
              : "text-xs p-1 m-2 inline tracking-wide text-white font-semibold bg-white"
          }
        >
          HOT
        </div>
        <div className="w-4/5 m-auto my-5">
          <img src={data.imageSource} alt={data.name} />
        </div>
      </div>
      <div className="bg-green-00 h-2/5 w-4/5 m-auto border-t-2">
        <div className="py-5 text-gray-800 font-semibold text-center">
          {data.name}
        </div>
        <div className="text-center my-1 text-yellow-500 bg-red-00 w-20 m-auto flex">
          <Stars level={data.rating} />
        </div>
        <div className="flex justify-center my-1">
          <div className="text-red-500 mx-2">${data.oldPrice}</div>
          <div className="text-gray-500 mx-2">${data.newPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
