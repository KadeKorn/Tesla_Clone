import React from "react";
import { FiChevronDown } from "react-icons/fi";

export const Model = ({ name, image, video, textColor }) => {
  return (
    <div
      className={`relative h-screen flex items-center justify-center ${
        video ? "" : "bg-no-repeat"
      }`}
    >
      {video ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
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
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="p-2 text-sm">
            Order online for
            <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
              <span className="underline underline-offset-4 ">
                Touchless Delivery
              </span>
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%] ">
          <a href="https://www.tesla.com/model3/design#overview">
            <button className="bg-[#393c41] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white">
              Custom Order
            </button>
          </a>
          <a href="https://www.tesla.com/inventory/new/m3">
            <button className="bg-[#eeeeee] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-black">
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

//Perhaps I should make the nav bar in the components or see how I can have it there always. Idk

// Imported font from react-icons.

// Hero Image: Text div css explained
// absolute inset-x-0 top-[15%] text-center - this positions the wrapper in the middle at the top 15% of the page. It also centers the text
// text-4xl font-bold" - this affects the texts size and font weight (bold)
// p-2 text small - this gives it padding and makes the text small. underline underline-offset-4 - this underlines the text in the span and gives moves the underline the underline down a bit

// Hero Image: Button container
// text-sm: Sets the font size of the text inside the element to "small" based on Tailwind's size scale.
// lg:flex-row: On screen sizes that match the lg (large) breakpoint or larger, the flex direction is set to row, which means the flex items will align horizontally.
// absolute: Positions the element absolutely relative to its nearest positioned ancestor (or relative to the viewport if no positioned ancestors exist).
// inset-x-0: Sets both the left and right positions to 0, making the element span the full width of its containing element.
// bottom-[10%]: A JIT (Just-In-Time) mode utility that positions the bottom of the element 10% from the bottom of its containing element.

//Buttons
// bg-[#393c41]: With Tailwind's JIT (Just-In-Time) mode, you can provide arbitrary values directly in square brackets. This sets the background color of the element to the hex value #393c41.
// rounded-md: Adds medium rounded corners to the element based on Tailwind's border-radius scale.
// w-96: Sets the width of the element to 24rem (or 384px).
// lg:w-64: On screen sizes that match the lg (large) breakpoint or larger, the width of the element is set to 16rem (or 256px).
// lg:mx-4: On screen sizes that match the lg (large) breakpoint or larger, the element will have a horizontal margin (both left and right) of 1rem (or 16px).
// h-10: Sets the height of the element to 2.5rem (or 40px).
// mt-2: Sets the margin-top of the element to 0.5rem (or 8px).
// text-white: Sets the text color inside the element to white.

// for the other button, all you have to do is change the color.
