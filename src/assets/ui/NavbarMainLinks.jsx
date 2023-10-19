import React from "react";

const NavbarMainLinks = ({ label, onClick, href }) => {
  const content = onClick ? (
    <span role="button" className="cursor-pointer" onClick={onClick}>
      {label}
    </span>
  ) : (
    <a href={href}>{label}</a>
  );

  return (
    <div className="hidden lg:inline ">
      <li className="py-1 px-2 hover:rounded hover:bg-black/5 ">{content}</li>
    </div>
  );
};

export default NavbarMainLinks;

/**
 * Notes:
 * 1. `NavbarMainLinks` is a functional component that can be used in the navigation bar to display main links.
 * 2. The component accepts three props: `label`, `onClick`, and `href`.
 * 3. The `label` prop displays the text for the link.
 * 4. The component checks if an `onClick` function is provided. 
 *    - If `onClick` is given, the component renders a button-like span element.
 *    - If not, it renders an anchor `<a>` tag using the `href` prop.
 * 5. The class `hidden lg:inline` ensures the links are hidden on smaller screens and visible on larger screens.
 * 6. The `<li>` styling gives a subtle hover effect with rounded edges and a slight background change.
 */