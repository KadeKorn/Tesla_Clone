import React from "react";
import { FiChevronDown } from "react-icons/fi";

export const TeslaModels = ({ name, image, video, textColor, price }) => {
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
        <img src={image} alt={name} className="object-cover w-full h-full" />
      )}

      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col">
        <div
          className={`absolute inset-x-0 top-[15%] text-center text-${textColor}`}
        >
          <h1 className="text-5xl font-bold">{name}</h1>
          <h2 className="p-2 text-2xl">{price}</h2>
          <p className="text-sm">After Federal Tax Credit & Est. Gas Savings</p>
        </div>

        <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
          <a href="https://www.tesla.com/model3/design#overview">
            <button className="bg-[#eeeeee] opacity-80 rounded-md w-96 lg:w-64 lg:mx-4 h-12 mt-2 text-black">
              Custom Order
            </button>
          </a>
          <a href="https://www.tesla.com/inventory/new/m3">
            <button className="bg-[#393c41] opacity-80 rounded-md w-96 lg:w-64 lg:mx-4 h-12 mt-2 text-white">
              Existing Inventory
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
// Notes:
// - Using Tailwind CSS for styles, which offers utility-first CSS classes for quick prototyping and styling.
// - The component displays a Tesla model with either a video or an image background.
// - The name, price, and some actions (like "Custom Order" and "Existing Inventory") are overlayed on the background.
// - Text color is dynamically adjusted based on the provided `textColor` prop.
// - Comments in the source provide a quick overview and explanation of the Tailwind classes used.
