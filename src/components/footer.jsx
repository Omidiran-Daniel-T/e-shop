import React from "react";
const Footer = () => {
  return (
    <section className="px-2 border-t-2">
      <section className="py-10 px-5 max-w-sm m-auto md:flex md:max-w-full justify-evenly md:px-10">
        <div className="mb-10 md:max-w-xs">
          <div className="text-4xl text-gray-400 font-bold">BOUNCER</div>
          <div className="text-gray-500 text-sm my-2">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </div>
        </div>
        <div className="pb-10 md:max-w-xs">
          <div className="text-gray-700 text-md font-semibold">Follow Us</div>
          <div className="text-gray-500 text-sm my-2">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries
          </div>
          <div className="text-blue-400 mt-5 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mx-2"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </div>
        </div>
        <div className="md:max-w-xs">
          <div className="text-gray-800 text-md font-semibold">Contact Us</div>
          <div className="text-gray-500 my-2 text-sm">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            and publishing industries for previewing layouts
          </div>
        </div>
      </section>
      <section className="border-t-2 text-gray-500 flex bg-red-00 justify-center py-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15.781c-2.084 0-3.781-1.696-3.781-3.781s1.696-3.781 3.781-3.781c1.172 0 2.306.523 3.136 1.669l1.857-1.218c-1.281-1.826-3.133-2.67-4.993-2.67-3.308 0-6 2.692-6 6s2.691 6 6 6c1.881 0 3.724-.859 4.994-2.67l-1.857-1.218c-.828 1.14-1.959 1.669-3.137 1.669z" />
        </svg>
        2021 Ecommerce Homepage make by Daniel Omidiran
      </section>
    </section>
  );
};

export default Footer;
