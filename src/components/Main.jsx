import React, { useEffect, useState } from "react";
import { Navbar, Post, Search, Register, LogInOut } from "./";
import { fetchingPost } from "../api.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const Main = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route element = {<Search setSearchInput={setSearchInput} />
      {userPosts ? <Post userPosts={filterPosts()} /> : 'loading'}
} />
        <Route path="posts" element={<Post userPosts={userPosts} />} />
        <Route path="login" element={<LogInOut />} />
        <Route path="register" element={<Register />} />
      </Route>
    )
  );

  useEffect(() => {
    const fetchPosts = async () => {
      const returnedPosts = await fetchingPost();
      setUserPosts(returnedPosts);
    };
    fetchPosts();
  }, []);

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

  return (
    <div id="main">
      {/* <Search setSearchInput={setSearchInput} />
      {userPosts ? <Post userPosts={filterPosts()} /> : <div>loading...</div>} */}

      <RouterProvider router={router}></RouterProvider>
      {/* </div> */}
    </div>
  );
};

export default Main;
