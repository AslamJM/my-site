import React from "react";

const Logo = () => {
  return (
    <div className="py-1">
      <h2 className="text-2xl font-semibold tracking-wider">
        <span className="text-red-600 mr-1 font-bold">{"<"}</span>Aslamjm
        <span className="text-red-600 ml-1 font-bold">{"/>"}</span>
      </h2>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="w-full flex items-center py-2 justify-between">
      <Logo />
      <div></div>
    </div>
  );
};

export default Navbar;
