import React, {useEffect, useState} from "react";
import { Navbar } from "./"
import { Post } from "./"
import { Search } from "./"
import { Register } from "./"

const Main = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [searchInput, setSearchInput] =useState('');

  useEffect(() => {
    const fetchSearchData = async () => {
      const searchData = await fetchSearchedData
      // START HERE TOMORROW.
      // i think we need to wrap in try catch and include a function for fetchedSearchedData (seepuppybowl ss)
    }
  })

function filterPosts() {
if (!searchInput){
  return userPosts
} else {
  let filteredPosts = userPosts.filter((found) =>{

    return found.title.toLowerCase() === searchInput.toLocaleLowerCase()
  })
  return filteredPosts
}}

  return (
    <div id="main">
      <Navbar/> 
      <Search userPosts= {userPosts} setSearchInput= {setSearchInput}/>
      {userPosts ? (
        <Post userPosts= {filterPosts()}/>
      ): (
        <div>loading...</div>
      )}
     <Register/>
  </div>
  );
};

export default Main;
