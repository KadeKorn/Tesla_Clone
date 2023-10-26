import React from "react";

export const Accessories = () => {
  const imgUrl =
    "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg";
  return (
    <div className="relative h-screen flex items-center justify-center">
      <img
        src={imgUrl}
        alt="Tesla Accessories"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col">
        <div className="absolute inset-x-0 top-[15%] text-center text-black">
          <h1 className="text-2xl md:text-5xl font-bold">Accessories</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center absolute inset-x-0 bottom-[10%] space-y-2 md:space-y-0">
          <a href="https://www.tesla.com/powerwall/design" className="w-4/5 md:w-auto">
            <button className="bg-[#eeeeee] rounded-md w-full md:w-64 h-10 mt-2 text-black">
             Shop Now
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

// Testing
