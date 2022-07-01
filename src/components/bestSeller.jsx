import React from "react";
import Card from "./sub-components/card";
const BestSeller = () => {
  return (
    <section className="">
      <section className="bg-red-00 text-2xl  my-5 text-center">
        BEST SELLER
      </section>
      <section className="">
        <div className="bg-red-00 flex flex-col items-center">
          <div className="flex bg-yellow-00 w-80 justify-between px-4 py-2 border-b-2 drop-shadow-lg cursor-pointer hover:drop-shadow-xl my-5 hover:bg-gray-00 ease-in-out duration-150 md:hidden">
            All{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="hidden md:flex bg-red-00 justify-center my-10">
            <div className="flex">
              <div className="text-gray-700 text-md hover:text-gray-500 mr-10 cursor-pointer active-sub-nav">
                All
              </div>
              <div className="text-gray-700 text-md hover:text-gray-500 mx-10 cursor-pointer">
                Mac
              </div>
              <div className="text-gray-700 text-md hover:text-gray-500 mx-10 cursor-pointer">
                IPhone
              </div>
              <div className="text-gray-700 text-md hover:text-gray-500 mx-10 cursor-pointer">
                IPad
              </div>
              <div className="text-gray-700 text-md hover:text-gray-500 mx-10 cursor-pointer">
                Macbook
              </div>
              <div className="text-gray-700 text-md hover:text-gray-500 mx-10 cursor-pointer">
                Accessories
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-red-00 md:px-10 flex flex-wrap">
        <Card
          data={{
            hot: true,
            name: "Apple Mac Book Pro",
            rating: 3,
            oldPrice: 499,
            newPrice: 599,
            imageSource:
              "https://www.transparentpng.com/thumb/macbook/Ls3q9D-macbook-free-transparent-png.png",
          }}
        />
      </section>
      <section className="text-center py-1 my-2">
        <div className="text-blue-400 font-semibold text-sm border-b-4 py-1 border-blue-400 inline uppercase cursor-pointer hover:text-blue-500 hover:border-blue-500">
          load more
        </div>
      </section>
    </section>
  );
};

export default BestSeller;
