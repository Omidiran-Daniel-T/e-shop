import React from "react";
import Stars from "./stars";
const Card = ({ data }) => {
  return (
    <div className="bg-yellow-00 h-96 w-80 rounded border-4 p-2 m-10">
      <div className="bg-teal-00 h-3/5 relative">
        <div className="absolute w-full h-full hover:bg-white opacity-80 transition-all duration-300 ease-in-out cursor-pointer text-transparent hover:text-blue-400 flex justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 px-2 mx-1 border border-current rounded-full hover:bg-blue-400 hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 px-2 mx-1 border border-current rounded-full hover:bg-blue-400 hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
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
