import React from "react";
const Ads = () => {
  return (
    <section className="bg-blue-400 my-10 py-20 md:py-10 px-5 flex flex-col items-center md:justify-evenly md:flex-row md:h-2/3">
      <div className="text-white">
        <div className="text-4xl font-thin">iPhone 6 Plus</div>
        <div className="text-md my-10 bg-red-00 font-light">
          Perfomance and design. Taken right <br /> to the edge.
        </div>
        <div className="text-xs border-b-4 border-white pb-1 font-bold inline-block cursor-pointer hover:text-sm transition-all duration-300 ease-in-out">
          SHOP NOW
        </div>
      </div>
      <div className="mt-20 md:mt-0">
        <img
          src="https://www.freeiconspng.com/thumbs/iphone-6-png/iphone-6-png-27.png"
          alt="img"
          className="h-80 md:h-full"
        />
      </div>
    </section>
  );
};

export default Ads;
