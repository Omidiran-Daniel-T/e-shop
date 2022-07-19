import React from "react";
import Card from "./sub-components/card";
import ColorCircle from "./sub-components/color-circle";
import Stars from "./sub-components/stars";
const Product = () => {
  return (
    <section className="py-10 bg-red-00">
      <div className="bg-red-00 py-5 px-5 md:flex md:m-auto max-w-6xl">
        <div className="bg-teal-00 h-96 md:w-1/3 ">
          <div className="bg-yellow-00 h-2/3 flex justify-center items-center">
            <img
              src="https://p.kindpng.com/picc/s/231-2313942_beats-wireless-stereo-headphones-hd-png-download.png"
              alt="img"
              className="h-full"
            />
          </div>
          <div className="bg-yellow-00 h-1/3 flex justify-center items-center">
            <div className="border-4 border-blue-400 rounded h-24 w-20 mx-3 flex items-center">
              <img
                src="https://p.kindpng.com/picc/s/231-2313942_beats-wireless-stereo-headphones-hd-png-download.png"
                alt="img"
                className="h-20 max-w-full m-auto"
              />
            </div>
            <div className="border-4 border-gray-300 rounded h-24 w-20 mx-3 flex items-center">
              <img
                src="https://p.kindpng.com/picc/s/231-2313942_beats-wireless-stereo-headphones-hd-png-download.png"
                alt="img"
                className="h-20 max-w-full m-auto"
              />
            </div>
          </div>
        </div>
        <div className="bg-teal-00 md:w-2/3">
          <div className="text-gray-700 font-bold text-2xl tracking-wide my-1">
            Beats On Ear Headphones
          </div>
          <div className="flex">
            <Stars level={4} />
          </div>
          <div className="flex font-semibold my-2">
            <div className="text-red-500">$499</div>
            <div className="text-gray-500 ml-2">$599</div>
          </div>
          <div className="flex my-2 border-t-2 pt-5 mt-5">
            <div className="font-bold text-gray-700">Availability:</div>
            <div className="text-gray-500 ml-2">In Stock</div>
          </div>
          <div className="flex my-2">
            <div className="font-bold text-gray-700">Category:</div>
            <div className="text-gray-500 ml-2">Accessories</div>
          </div>
          <div className="flex my-2">
            <div className="font-bold text-gray-700">Free Shipping</div>
          </div>
          <div className="flex my-2 items-center">
            <div className="font-bold text-gray-700">Select Color:</div>
            <div className="flex pl-2 items-center">
              <ColorCircle color="red" active={false} />
              <ColorCircle color="blue" active={false} />
              <ColorCircle color="yellow" active={true} />
            </div>
          </div>
          <div className="flex my-5 bg-red-00 justify-between border-t-2 pt-5">
            <div className="flex bg-gray-200 font-bold text-blue-400 w-24 h-10 border-1 border-blue-400 items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <div className="text-gray-800 text-sm">2</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </div>
            <div className="flex bg-blue-100 text-blue-400 w-36 justify-evenly items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              <div className="text-md">Add To Cart</div>
            </div>
            <div className="bg-blue-100 text-blue-400 w-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 max-w-6xl m-auto px-5">
        <div className="font-semibold text-lg py-5 text-gray-500 border-b-2 border-gray-400">
          More Information
        </div>
        <div className="text-gray-400 py-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.ß
          </p>
        </div>
      </div>
      <div className="text-gray-700">
        <div className="font-semibold uppercase text-center text-2xl mt-10">
          Related Products
        </div>
        <div className="flex">
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
        </div>
      </div>
    </section>
  );
};

export default Product;
