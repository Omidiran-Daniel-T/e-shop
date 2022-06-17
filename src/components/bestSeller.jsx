import React from "react";
import Card from "./sub-components/card";
const BestSeller = () => {
  return (
    <section className="">
      <section className="bg-red-00 text-2xl py-5 my-5 text-center">
        BEST SELLER
      </section>
      <section className="">
        <div className="bg-red-00 flex flex-col items-center">
          <div className="flex bg-yellow-00 w-80 justify-between px-4 py-2 border-b-2 drop-shadow-xl cursor-pointer hover:drop-shadow-2xl my-5 hover:bg-gray-100 ease-in-out duration-150 md:hidden">
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
      <section className="bg-red-00 md:p-10 my-5 py-5 flex flex-wrap">
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
    </section>
  );
};

export default BestSeller;
