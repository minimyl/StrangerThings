import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <h2>STRANGER'S THINGS</h2>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
