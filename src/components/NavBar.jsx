import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";

export const NavBar = ({ currentModel, hasVideo }) => {
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMouseEnter = () => {
    // Add this block
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    // Add this block
    setShowDropdown(false);
  };

  const textColorClass = hasVideo ? "text-white" : "text-black";
  const logoFilterClass = hasVideo ? "filter invert" : "";

  return (
    <div
      className={`fixed top-0 left-0 w-full font-bold px-12 p-4 flex justify-between items-center bg-transparent z-20 ${textColorClass} ${
        showDropdown ? "text-black-on-dropdown" : ""
      }`}
      onMouseEnter={handleMouseEnter} /* Moved onMouseEnter here */
      onMouseLeave={handleMouseLeave} /* And onMouseLeave here */
    >
      <div>
        <a href="https://tesla.com">
          <img
            className={`h-3 ${logoFilterClass} ${
              showDropdown ? "filter invert" : ""
            }`}
            src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
            alt="Tesla-Logo"
          />
        </a>
      </div>

      <div className="hidden lg:inline">
        <ul
          className="flex justify-center hover:cursor-pointer"
        
        >
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
            Vehicles
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">Energy</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
            Charging
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
            Discover
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">Shop</li>
        </ul>
      </div>
      <div className={`dropdown-bg ${showDropdown ? "show" : ""}`}>
        <div className="dropdown-container">
          <ul className="models-list">
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>Model Y</li>
          </ul>
        </div>
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
