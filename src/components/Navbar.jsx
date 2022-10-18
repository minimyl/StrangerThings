import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
        <h2>Craigslist-lite</h2>
        <form>
          <div id="submitBox">
            <label>
              <p>Search:</p>
            </label>
            <input 
            type="text"
            placeholder="searchHere"
            />
          </div>
        </form>
  </div>
  );
};

export default Navbar;
