import React from "react";
import Stars from "./sub-components/stars";
const Cart = () => {
  return (
    <section className="py-5 my-5">
      <section className="bg-gray-00 flex justify-between px-5 md:px-10 text-md">
        <div className="text-gray-700">12 Item(s)</div>
        <div className="text-red-500 flex cursor-pointer">clear all</div>
      </section>
      <section className="bg-red-00 py-10 px-5">
        {/* <div className="bg-white py-5 rounded-lg shadow-xl md:flex my-10">
          <div className="bg-red-00 w-full h-48 flex justify-center md:w-1/3">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Apple-iPad-PNG-Free-Download.png"
              alt="cart-img-1"
              className="h-48"
            />
          </div>
          <div className="bg-green-00 mx-5 mt-5 py-2 border-t md:w-2/3 ">
            <div className="text-gray-700 font-bold tracking-wide text-xl my-1">
              Macbook Pro - gray
            </div>
            <div className="flex">
              <div className="text-red-500 font-semibold">$499</div>
              <div className="text-gray-500 font-semibold line-through mx-2">
                $799
              </div>
            </div>
            <div className="flex my-2">
              <Stars level={3} />
            </div>
            <div className="flex items-center my-1">
              <div className="rounded-full drop-shadow-xl p-1 bg-white text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </div>
              <div className="text-gray-700 font-semibold mx-4">1</div>
              <div className="rounded-full drop-shadow-xl p-1 bg-white text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
            </div>
            <div className="bg-red-500 w-full flex justify-center items-center py-2 mt-5 text-sm text-white traching-wide font-semibold rounded-md">
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
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Remove Item From Cart
            </div>
          </div>
        </div> */}
        <div className="bg-white py-5 rounded-lg shadow-xl md:flex">
          <div className="bg-red-00 w-full h-48 flex justify-center md:w-1/3">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Apple-iPad-PNG-Free-Download.png"
              alt="cart-img-1"
              className="h-48"
            />
          </div>
          <div className="bg-green-00 mx-5 mt-5 py-2 border-t md:w-2/3 ">
            <div className="text-gray-700 font-bold tracking-widest text-xl my-1">
              Macbook Pro - gray
            </div>
            <div className="flex">
              <div className="text-red-500 font-semibold">$499</div>
              <div className="text-gray-500 font-semibold line-through mx-2">
                $799
              </div>
            </div>
            <div className="flex my-2">
              <Stars level={3} />
            </div>
            <div className="flex items-center my-1">
              <div className="rounded-full drop-shadow-xl p-1 bg-white text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </div>
              <div className="text-gray-700 font-semibold mx-4">1</div>
              <div className="rounded-full drop-shadow-xl p-1 bg-white text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
            </div>
            <div className="w-full flex justify-center items-center py-2 mt-5">
              <div className="hover:bg-red-500 text-red-500 hover:text-white p-2 rounded-full ease-in-out duration-300 border-none hover:cursor-pointer">
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Cart;
