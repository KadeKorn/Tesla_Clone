import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";

export const NavBar = ({ currentModel, hasVideo }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const textColorClass = hasVideo ? "text-white" : "text-black";
  const logoFilterClass = hasVideo ? "filter invert" : "";

  return (
    <div
      className={`fixed top-0 left-0 w-full font-bold px-12 p-4 flex justify-between items-center bg-transparent z-20 ${textColorClass}`}
    >
      <div>
        <a href="https://tesla.com">
          <img
            className={`h-3 ${logoFilterClass}`}
            src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
            alt="Tesla-Logo"
          />
        </a>
      </div>

      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
            <a href="https://tesla.com/models">Model S</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
            <a href="https://tesla.com/model3"> Model 3</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
            <a href="https://tesla.com/modelx">Model X</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
            <a href="https://tesla.com/modely">Model Y</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
            <a href="https://tesla.com/solarroof">Solar Roof</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
            <a href="https://tesla.com/solarpanels">Solar Panels </a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
            <a href="https://shop.tesla.com">Shop</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
            <a href="https://tesla.com/teslaaccount">Account</a>
          </li>
          <li
            onClick={handleNav}
            className="py-1 px-3 hover:rounded hover:bg-black/5 "
          >
            Menu
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <button
          onClick={handleNav}
          className="inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10 "
        >
          Menu
        </button>
      </div>
      {nav && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40"></div>
      )}

      <div
        className={
          nav
            ? "bg-white absolute top-0 right-0 w-full h-full z-50"
            : "fixed right-[100%] z-50"
        }
      >
        <div className="flex justify-end pr-8 pt-8 color-black">
          <TfiClose
            onClick={handleNav}
            className="rounded p-1 hover:bg-black/5 text-black "
            size={28}
          />
        </div>
        <ul className="t-8 px-6">
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5 text-black">
            <a href="https://tesla.com/models">Model S</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5 text-black">
            <a href="https://tesla.com/model3">Model 3</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5 text-black">
            <a href="https://tesla.com/modelx">Model X</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5 text-black">
            <a href="https://tesla.com/modely">Model Y</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5 text-black">
            <a href="https://tesla.com/solarroof">Solar Roof</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5 text-black">
            <a href="https://tesla.com/modelsolarpanels">Solar Panels</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5 text-black">
            <a href="https://tesla.com/inventory/new/m3">Existing Inventory</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5 text-black">
            <a href="https://tesla.com/inventory/used/m3">Used Inventory</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5 text-black">
            <a href="https://tesla.com/tradein">Trade-In</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5 text-black">
            <a href="https://tesla.com/drive">Demo Drive</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5 text-black">
            <a href="https://tesla.com/insurance">Insurance</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5 text-black">
            <a href="https://tesla.com/powerwall">Powerwall</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

//Component explained - GIVE BETTER DESCRIPTION WHEN DONE Whats really cool about using tailwind is you can make your website so responsive quite easily.

// Starting Div (container) css explained
// flex: Applies the CSS flex display property, making the element a flex container.
// justify-between: Horizontally spaces flex items such that the first item is at the start and the last item is at the end of the flex container.
// items-center: Vertically aligns flex items to the center of the flex container.
// px-12: Adds horizontal padding (left and right) to the element equivalent to the spacing scale of 12 in Tailwind.
// p-4: Adds padding to all sides of the element equivalent to the spacing scale of 4 in Tailwind.
// text-sm: Sets the font size of the text inside the element to "small" based on Tailwind's size scale.
// font-bold: Makes the text inside the element bold.

// LI css explained
// py-1: Adds vertical padding (top and bottom) to the element equivalent to the spacing scale of 1 in Tailwind.
// px-3: Adds horizontal padding (left and right) to the element equivalent to the spacing scale of 3 in Tailwind.
// hover:rounded: Rounds the corners of the element when it's hovered over.
// hover:bg-black/5: Changes the background color of the element to black with 20% opacity (1/5th opaque) when it's hovered over.

// UL css explained
// flex: Applies the CSS flex display property, transforming the element into a flex container.
// justify-center: Horizontally aligns flex items to the center of the flex container.
// hover:cursor-pointer: Changes the mouse cursor to a pointer (hand icon) when the element is hovered over.

// Button css explained
// inline-flex: Applies the CSS inline-flex display property, making the element an inline-level flex container.
// items-center: Vertically aligns flex items to the center of the flex container.
// rounded-md: Rounds the corners of the element with a medium radius.
// py-2: Adds vertical padding (top and bottom) to the element equivalent to the spacing scale of 2 in Tailwind.
// px-4: Adds horizontal padding (left and right) to the element equivalent to the spacing scale of 4 in Tailwind.
// text-sm: Sets the font size of the text inside the element to "small" based on Tailwind's size scale.
// font-medium: Sets the weight of the text inside the element to medium.
// bg-black/5: Sets the background color of the element to black with 20% opacity.
// shadow-sm: Adds a small box shadow to the element.
// hover:bg-black/10: Changes the background color of the element to black with 10% opacity when it's hovered over.

// Side Menu css explained
// bg-white: Sets the background color of the element to white.
// absolute: Positions the element with absolute positioning relative to the nearest positioned ancestor.
// top-0: Sets the top edge of the element to align with the top edge of its closest positioned ancestor.
// right-0: Sets the right edge of the element to align with the right edge of its closest positioned ancestor.
// w-80: Sets the width of the element to 80 units (typically this would be 80% if using a utility-first CSS framework like TailwindCSS).
// h-full: Sets the height of the element to be the full height of its parent.
// z-10: Sets the z-index of the element to 10, which controls the stacking order of positioned elements.

// Logic
// I added some functionality - set up a use state and a toggle. I added the toggle to both menu options
// and the close icon. I then added a ternary operator (line 71-75) to conditionally render the menu via the toggle. If true
// then it opens and if the toggle is then clicked again (from any of the three options) then it closes
