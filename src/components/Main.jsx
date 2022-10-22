import React, { useEffect, useState } from "react";
import {
  Navbar,
  Search,
  Register,
  LogInOut,
  PostsDetails,
  CreatePosts,
  Profile,
} from "./";
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
  const [messages, setMessages] = useState([]);

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
              setUserPosts={setUserPosts}
            />
          }
          element2={
            <CreatePosts userPosts={userPosts} setUserPosts={setUserPosts} />
          }
        />
        <Route
          path="newEdit/:postId"
          element={
            <PostsDetails userPosts={userPosts} setUserPosts={setUserPosts} />
          }
        />
        <Route path="login" element={<LogInOut />} />
        <Route path="register" element={<Register />} />
        <Route
          path="profile"
          element={<Profile messages={messages} setMessages={setMessages} />}
        />
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
