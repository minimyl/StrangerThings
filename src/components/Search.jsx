import React, { useState, useEffect } from "react";
import { Post } from "./";
import { Link } from "react-router-dom";

const Search = (props) => {
  const userPosts = props.userPosts;
  const setUserPosts = props.setUserPosts;
  const searchInput = props.searchInput;
  const setSearchInput = props.setSearchInput;

  function filterPosts() {
    if (!searchInput) {
      return userPosts;
    } else {
      let filteredPosts = userPosts.filter((found) => {
        return found.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      console.log(filteredPosts);
      return filteredPosts;
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    console.log("you can't handle the truth");
    setSearchInput(e.target.value);
  };

  return (
    <div id="searchBar">
      <div className="searchBarDiv">
        <input
          className="searchBarInputBar"
          type="search"
          placeholder="search here"
          onChange={handleChange}
        />
      </div>
      <div className="topPostButtons">
        <Link to={`/register`}>
          <button className="postDetailsButton">Register</button>
        </Link>
        <Link to={`/login`}>
          <button className="postDetailsButton">LogIn</button>
        </Link>
        <Link to={`/profile`}>
          <button className="postDetailsButton">User Profile</button>
        </Link>
      </div>
      {userPosts ? (
        <Post userPosts={filterPosts()} setUserPosts={setUserPosts} />
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Search;
