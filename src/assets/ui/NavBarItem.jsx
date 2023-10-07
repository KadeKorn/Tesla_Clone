import React from "react";

const NavbarItem = ({ label, onClick, href }) => {
  const content = onClick ? (
    <span role="button" className="cursor-pointer" onClick={onClick}>
      {label}
    </span>
  ) : (
    <a href={href}>{label}</a>
  );

  return (
    <div className="hidden lg:inline">
      <li className="py-1 px-2 hover:rounded hover:bg-black/5 ">{content}</li>
    </div>
  );
};

export default NavbarItem;
