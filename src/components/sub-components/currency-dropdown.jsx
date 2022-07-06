import React, { useEffect, useRef, useState } from "react";
import { getCurrencies } from "../../utilities/currencies";

const Currency = () => {
  const [hidden, setHidden] = useState(true);
  const [currency, setCurrency] = useState("USD");
  const currencyRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setHidden(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [currencyRef]);

  return (
    <>
      <div
        className="bg-red-00 relative flex mx-8 items-center cursor-pointer"
        onClick={() => setHidden(!hidden)}
      >
        {currency}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2 "
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
        {hidden ? (
          <></>
        ) : (
          <ul
            className="bg-white w-60 top-10 absolute h-80 overflow-auto rounded-b-lg pb-2 shadow-xl z-40"
            ref={currencyRef}
          >
            {getCurrencies().map((c) => (
              <li
                key={c.abbreviation}
                className="bg-blue-00 pl-5 py-2 border-t-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200 border-gray-200 transition duration-300 ease-in"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrency(c.abbreviation);
                  setHidden(true);
                }}
              >
                {c.currency}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Currency;
