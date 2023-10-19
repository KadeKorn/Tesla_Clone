import React from "react";
import { TfiClose } from "react-icons/tfi";

const MenuPopout = ({ isVisible, onClose }) => {
  const popoutClass = isVisible
  ? "bg-white fixed top-0 right-0 w-[30%] h-full z-50 transition-all duration-300 transform translate-x-0 opacity-100"
  : "bg-white fixed top-0 right-0 w-[30%] h-full z-50 transition-all duration-300 transform translate-x-full opacity-0 pointer-events-none";

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

/**
 * Notes:
 * 1. `MenuPopout` is a functional component that renders a popout menu.
 * 2. It utilizes the `isVisible` prop to determine if the menu should be shown or hidden.
 * 3. If `isVisible` is true, the menu appears by translating it from right to left (0% X-axis translation). 
 *    If false, it gets translated 100% on the X-axis to hide it.
 * 4. The `onClose` prop is a function passed down to handle the closing of the menu.
 * 5. When the user clicks on the close icon (`TfiClose`), the `onClose` function is invoked.
 * 6. The menu contains various list items that are links to different sections of the Tesla website.
 */