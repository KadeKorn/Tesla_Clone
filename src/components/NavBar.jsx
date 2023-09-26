import React from "react";

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-12 p-4 text-sm font-bold">
      <div>
        <img
          className="h-3"
          src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
          alt="Tesla-Logo"
        />
      </div>

      <div>
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">Model S</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">Model 3</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">Model X</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">Model Y</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">Solar Roof</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">Solar Panels</li>
        </ul>
      </div>

      <div>
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">Shop</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">Account</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">Menu</li>
        </ul>
      </div>
    </nav>
  );
};

// LI css explained
// py-1: Adds vertical padding (top and bottom) to the element equivalent to the spacing scale of 1 in Tailwind.
// px-3: Adds horizontal padding (left and right) to the element equivalent to the spacing scale of 3 in Tailwind.
// hover:rounded: Rounds the corners of the element when it's hovered over.
// hover:bg-black/5: Changes the background color of the element to black with 20% opacity (1/5th opaque) when it's hovered over.

// UL css explained
//flex: Applies the CSS flex display property, transforming the element into a flex container.
//justify-center: Horizontally aligns flex items to the center of the flex container.
//hover:cursor-pointer: Changes the mouse cursor to a pointer (hand icon) when the element is hovered over.

