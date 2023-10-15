import React from "react";

export const SolarPanels = () => {
  const imgUrl =
    "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D";
  return (
    <div className="relative h-screen flex items-center justify-center">
      <img
        src={imgUrl}
        alt="Tesla Solar Panels"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col">
        <div className="absolute inset-x-0 top-[15%] text-center text-black">
          <h1 className="text-5xl font-bold">Solar Panels</h1>
          <a href="https://www.tesla.com/solar-virtual-consultations">
            <p className="text-sm underline">Schedule a virtual Consultation</p>
          </a>
        </div>

        <div className="flex items-center justify-center absolute inset-x-0 bottom-[10%]">
          <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%] ">
            <a href="https://www.tesla.com/energy/design">
              <button className="bg-[#393c41] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white">
                Custom Order
              </button>
            </a>
            <a href="https://www.tesla.com/solarpanels">
              <button className="bg-[#eeeeee] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-black">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
