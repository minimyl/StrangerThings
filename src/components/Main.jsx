import React, {useEffect, useState} from "react";
import { Navbar } from "./"
import { Post } from "./"
import { Search } from "./"
import { Register } from "./"
import {fetchingPost} from '../api.js'
// import {LogInOut} from './'

const Main = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [searchInput, setSearchInput] =useState('');

  

  useEffect(() => {
    const fetchPosts = async () => {
      const returnedPosts= await fetchingPost()
      setUserPosts(returnedPosts)
    }
    fetchPosts()
  },[])

function filterPosts() {
if (!searchInput){
  return userPosts
} else {
  let filteredPosts = userPosts.filter((found) =>{

    return found.title.toLowerCase().includes(searchInput.toLowerCase())  
  })
  console.log(filteredPosts)
  return filteredPosts
}}

  return (
    <div id="main">
      <Navbar/> 
      {/* <LogInOut /> */}
      <Search  setSearchInput= {setSearchInput} />
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
