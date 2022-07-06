import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import PhoneImage from "../images/iPhone-11-PNG-Transparent-HD-Photo.png";

const ImageSlider = ({ data }) => {
  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showIndicators={false}
        transitionTime={2000}
        useKeyboardArrows={true}
        showStatus={false}
      >
        {data.map((m) => (
          <div
            className="bg-gradient-to-r from-pink-500 to-purple-500 md:flex sm:px-10 md:px-20 my-10 py-10 md:pb-10 md:h-screen"
            key={m.title}
          >
            <div className="bg-blue-00 text-white flex flex-col justify-center items-center px-5 md:px-10 py-20">
              <div className="text-2xl font-semibold tracking-wider">
                {m.title}
              </div>
              <div className="my-10 text-center md:text-start">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </div>
              <div className="font-semibold border-b-4 cursor-pointer text-md hover:text-xl  ease-in-out duration-300 ">
                MORE
              </div>
            </div>
            <div className="bg-yellow-00 md:pt-20">
              <img src={m.imageSrc} alt="phone" className="h-80 md:h-full" />
            </div>
          </div>
        ))}
      </Carousel>
      <div className="bg-red-00 px-2 md:flex justify-center  my-10 md:-mt-24 ">
        <div className="bg-red-400 text-white w-96 px-5 py-5 md:flex md:h-80 items-center m-auto md:m-0 z-40">
          <div className="md:w-3/5">
            <div className="text-lg">IPhone 7</div>
            <div className="text-xs py-8">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </div>
            <div className="text-md">$399</div>
          </div>
          <div className="md:w-2/5">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Apple-iPad-PNG-Free-Download.png"
              alt="sd1"
              className="h-80 md:h-40"
            />
          </div>
        </div>
        <div className="bg-gray-300 text-gray-800 w-96 md:h-80 m-auto md:m-0 z-40">
          <div className="px-5 py-5">
            <img src={PhoneImage} alt="sd2" className="h-80 md:h-60" />
            <div className="font-semibold flex justify-between px-5">
              <div className="text-lg">Oculus Rift</div>
              <div className="text-lg">$349</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 px-5 py-5 w-96 md:h-80 md:flex m-auto md:m-0 z-40">
          <div className="md:w-3/5">
            <div className="text-lg">Go Pro 6</div>
            <div className="text-xs py-8">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </div>
            <div className="text-lg text-lg">$299</div>
          </div>
          <div className="md:w-2/5 flex flex-col justify-end">
            <img
              src="https://freepngimg.com/save/21780-digital-video-camera-transparent-image/1712x1192"
              alt="sd3"
              className="h-80 md:h-40"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
