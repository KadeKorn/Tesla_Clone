import React from "react";

export const Accessories = () => {
  const imgUrl =
    "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg";
  return (
    <div className="relative h-screen flex items-center justify-center">
      <img
        src={imgUrl}
        alt="Tesla Solar Panels"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col">
        <div className="absolute inset-x-0 top-[15%] text-center text-black">
          <h1 className="text-5xl font-bold">Accessories</h1>
        </div>

        <div className="flex items-center justify-center absolute inset-x-0 bottom-[10%]">
          <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%] ">
            <a href="https://www.tesla.com/powerwall/design">
              <button className="bg-[#eeeeee] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-black">
               Shop Now
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};