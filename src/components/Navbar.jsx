import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <h2>Craigslist-lite</h2>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
