import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { SinglePost, CreatePosts } from "./";

const Post = (props) => {
  const { id } = useParams();
  const userPosts = props.userPosts;
  const setUserPosts = props.setUserPosts;
  return (
    <div className="allPostBody">
      <CreatePosts userPosts={userPosts} setUserPosts={setUserPosts}/>
      {id ? (
        <Outlet context={filterPosts()} />
      ) : userPosts.length ? (
        userPosts.map((post) => {
          return <SinglePost key={`post-id-${post._id}`} post={post} />;
        })
      ) : (
        <div> Loading Posts! </div>
      )}{" "}
    </div>
  );
};

export default Post;
