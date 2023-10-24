import React from "react";
import { FiChevronDown } from "react-icons/fi";
import "../index.css";

export const SolarPanels = () => {
  const imgUrl =
    "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D";

  return (
    <div className="relative h-screen flex items-center justify-center">
      <img
        src={imgUrl}
        alt="Tesla Solar Panels"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-10"
      />

      <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col">
        <div className="absolute inset-x-0 top-[15%] text-center text-black">
          <h1 className="text-2xl md:text-5xl font-bold mb-3">Solar Panels</h1>
          <a
            href="https://www.tesla.com/solar-virtual-consultations"
            className="text-sm md:text-md underline"
          >
            Schedule a virtual Consultation
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center absolute inset-x-0 bottom-[10%] space-y-2 md:space-y-0 md:space-x-4">
          <a href="https://www.tesla.com/energy/design" className="w-4/5 md:w-auto">
            <button className="bg-[#eeeeee] opacity-80 rounded-md w-full md:w-64 h-10 mt-2 text-black">
              Order Now
            </button>
          </a>
          <a href="https://www.tesla.com/solarpanels" className="w-4/5 md:w-auto">
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

// Notes:
// - This component presents Tesla's solar panels.
// - Uses Tailwind CSS for styling, and it includes a custom CSS import.
// - Features an option for users to schedule a virtual consultation with Tesla regarding their solar panels.
// - Two strategically placed call-to-action buttons encourage users to either order the panels or learn more about them.