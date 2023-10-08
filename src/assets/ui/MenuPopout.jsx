import React from "react";
import { TfiClose } from "react-icons/tfi";

const MenuPopout = ({ isVisible, onClose }) => {
  const popoutClass = isVisible
    ? "bg-white fixed top-0 right-0 w-[30%] h-full z-50 transition-all-slow transform translate-x-0 opacity-100"
    : "bg-white fixed top-0 right-0 w-[30%] h-full z-50 transition-all-slow transform translate-x-[-100%] opacity-0 pointer-events-none";

  return (
    <div className={popoutClass}>
      <div className="flex justify-end pr-8 pt-8 color-black">
        <TfiClose
          onClick={onClose}
          className="rounded p-1 hover:bg-black/5 text-black"
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
  );
};

export default MenuPopout;
