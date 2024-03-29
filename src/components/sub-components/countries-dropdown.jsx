import React, { useEffect, useRef, useState } from "react";
import { getCountries } from "../../utilities/countries";

const Countries = () => {
  const [hidden, setHidden] = useState(true);
  const [country, setCountry] = useState("EN");
  const countryRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setHidden(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [countryRef]);

  return (
    <>
      <div
        className="bg-red-00 relative flex mx-3 items-center cursor-pointer"
        onClick={() => setHidden(!hidden)}
      >
        {country}
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
        {hidden ? (
          <></>
        ) : (
          <ul
            className="bg-white z-40 w-60 top-10 absolute h-80 overflow-auto rounded-b-lg pb-2 shadow-xl"
            ref={countryRef}
          >
            {getCountries().map((c) => (
              <li
                key={c.country}
                className="bg-blue-00 pl-5 py-2 border-t-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200 border-gray-200 transition duration-300 ease-in"
                onClick={(e) => {
                  e.preventDefault();
                  setCountry(c.abbreviation);
                  setHidden(true);
                }}
              >
                {c.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Countries;
