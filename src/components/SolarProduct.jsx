// SolarProduct.jsx
import React from "react";
import { FiChevronDown } from "react-icons/fi";

export const SolarProduct = ({ name, image, video, textColor, text }) => {
  return (
    <div
      className={`relative h-screen flex items-center justify-center ${
        video ? "" : "bg-no-repeat"
      }`}
    >
      {video ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={image}
          alt={`${name}`}
          className="object-cover w-full h-full"
        />
      )}

      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col">
        <div
          className={`absolute inset-x-0 top-[15%] text-center text-${textColor}`}
        >
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="text-sm">{text}</p> 
        </div>

        <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%] ">
          <a href=""> {/* Updated link */}
            <button className="bg-[#393c41] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white">
              Learn More
            </button>
          </a>
          <a href=""> {/* Updated link */}
            <button className="bg-[#eeeeee] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-black">
              Order Now
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
