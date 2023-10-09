import React, { useState } from "react";
import NavbarMainLinks from "../assets/ui/NavbarMainLinks";
//import { TfiClose } from "react-icons/tfi";
import MenuPopout from "../assets/ui/MenuPopout";
import "../index.css";

export const NavBar = ({ currentModel, hasVideo, handleModelScroll }) => {
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
      <ul className="flex justify-center space-x-4 hover:cursor-pointer">
        <NavbarMainLinks
          label="Model 3"
          onClick={() => handleModelScroll("model3")}
        />
        <NavbarMainLinks
          label="Model Y"
          onClick={() => handleModelScroll("modely")}
        />
        <NavbarMainLinks
          label="Model S"
          onClick={() => handleModelScroll("models")}
        />
        <NavbarMainLinks
          label="Model X"
          onClick={() => handleModelScroll("modelx")}
        />
        <NavbarMainLinks
          label="Solar Roof"
          href="https://tesla.com/solarroof"
        />
        <NavbarMainLinks
          label="Solar Panels"
          href="https://tesla.com/solarpanels"
        />
      </ul>

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
        <div
          onClick={handleNav} // Allow closing the menu by clicking the overlay
          className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md z-45 cursor-pointer"
        ></div>
      )}
      <MenuPopout isVisible={nav} onClose={handleNav} />
    </div>
  );
};
