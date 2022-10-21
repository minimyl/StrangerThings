import React, { useEffect, useState } from "react";
import { Navbar, Search, Register, LogInOut, PostsDetails } from "./";
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
        <Route
          path="posts"
          element={
            <Search
              setSearchInput={setSearchInput}
              searchInput={searchInput}
              userPosts={userPosts}
            />
          }
        />
        <Route
          path="newEdit/:postId"
          element={<PostsDetails userPosts={userPosts} />}
        />
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

  return (
    <div id="main">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Main;
