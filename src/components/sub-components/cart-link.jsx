import React from "react";
const CartLink = ({ totalItems, totalPrice }) => {
  return (
    <>
      <div className="flex mx-4 cursor-pointer justify-center hover:text-gray-700 mt-2 md:mt-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mx-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        {totalItems} items
        <div className="text-gray-500 ml-3">${totalPrice}</div>
      </div>
    </>
  );
};

export default CartLink;
