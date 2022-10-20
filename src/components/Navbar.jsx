import React from "react";
import {Search} from "./"
import { Outlet } from "react-router-dom";

const Navbar = ({
  setSearchInput,
  searchInput,
  userPosts
}) => {
  
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
