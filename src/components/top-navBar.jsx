import React from "react";
const TopNav = () => {
  return (
    <section className="bg-red-00 grid grid-cols-3 md:grid-cols-6">
      <div className="text-gray-800 text-center py-2 hover:text-gray-500 cursor-pointer active-nav">
        HOME
      </div>
      <div className="text-gray-800 text-center py-2 hover:text-gray-500 cursor-pointer">
        STORE
      </div>
      <div className="text-gray-800 text-center py-2 hover:text-gray-500 cursor-pointer">
        IPHONE
      </div>
      <div className="text-gray-800 text-center py-2 hover:text-gray-500 cursor-pointer">
        IPAD
      </div>
      <div className="text-gray-800 text-center py-2 hover:text-gray-500 cursor-pointer">
        MACBOOK
      </div>
      <div className="text-gray-800 text-center py-2 hover:text-gray-500 cursor-pointer">
        ACCESORIES
      </div>
    </section>
  );
};

export default TopNav;
