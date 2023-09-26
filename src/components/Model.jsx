import React from "react";
import { FiChevronDown } from "react-icons/fi";

export const Model = () => {
  return (
    <div>
      <div className="absolute inset-x-0 top-[15%] text-center">
        <h1 className="text-4xl font-bold">Model 3</h1>
        <p>Order online for Touchless Delivery</p>
      </div>

      <div>
        <button>Custom Order</button>
        <button>Existing Inventory</button>
      </div>
      <div>
        <FiChevronDown />
      </div>
    </div>
  );
};
