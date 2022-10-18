import React, {useState} from "react";
import { Navbar } from "./"
import { Post } from "./"
import { Search } from "./"
import { Register } from "./"

const Main = () => {
  const [searchInput, setSearchInput] =useState('')



  return (
    <div id="main">
      <Navbar/> 
      <Post/>
      <Search/>
     <Register/>
  </div>
  );
};

export default Main;
