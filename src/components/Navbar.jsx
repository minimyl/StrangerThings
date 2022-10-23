import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <h2>STRANGER'S THINGS</h2>
      </div>
      <div>
        <Outlet />
      </div>
      <Link to={`/posts`}>
        <button className="postDetailsButton">Go to Posts Page</button>
      </Link>
    </>
  );
};

export default Navbar;
