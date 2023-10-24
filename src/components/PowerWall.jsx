import React from "react";
import { FiChevronDown } from "react-icons/fi";

export const PowerWall = () => {
  const imgUrl =
    "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop.jpg";
  return (
    <div className="relative h-screen flex items-center justify-center">
      <img
        src={imgUrl}
        alt="Tesla Powerwall"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col">
        <div className="absolute inset-x-0 top-[15%] text-center text-black">
          <h1 className="text-2xl md:text-5xl font-bold">Powerwall</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center absolute inset-x-0 bottom-[10%] space-y-2 md:space-y-0 md:space-x-4">
          <a href="https://www.tesla.com/powerwall/design" className="w-4/5 md:w-auto">
            <button className="bg-[#eeeeee] opacity-80 rounded-md w-full md:w-64 h-10 mt-2 text-black">
              Order Now
            </button>
          </a>
          <a href="https://www.tesla.com/powerwall" className="w-4/5 md:w-auto">
            <button className="bg-[#393c41] opacity-80 rounded-md w-full md:w-64 h-10 mt-2 text-white">
              Learn More
            </button>
          </a>
        </div>

        <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[2.5%]">
          <FiChevronDown size={20} />
        </div>
      </div>
    </div>
  );
};
