import React from "react";
import { FiChevronDown } from "react-icons/fi";

export const ExperienceTesla = () => {
  const videoUrl =
    "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4";

  return (
    <div className="relative h-screen flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        autoPlay
        loop
        muted
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col">
        <div className="absolute inset-x-0 top-[15%] text-center text-white">
          <h1 className="text-5xl font-bold mb-3">Experience Tesla</h1>
          <p className="text-sm">Schedule a Demo Drive Today</p>
        </div>

        <div className="flex items-center justify-center absolute inset-x-0 bottom-[10%]">
          <a
            href="https://www.tesla.com/test-drive"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-4 border-white bg-transparent text-white py-2 px-24 rounded">
              Demo Drive
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
// - This component showcases a video from Tesla with the option for users to schedule a demo drive.
// - It uses Tailwind CSS for styling and a react-icon for the downward arrow.
// - It encourages users to take action through a strategically placed call-to-action button.
