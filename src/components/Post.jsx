import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { SinglePost } from "./";

const Post = (props) => {
  const { id } = useParams();
  const userPosts = props.userPosts;
  return (
    <div className="allPostBody">
      {id ? (
        <Outlet context={filterPosts()} />
      ) : userPosts.length ? (
        userPosts.map((post) => {
          return <SinglePost key={`post-id-${post._id}`} post={post} />;
        })
      ) : (
        <div> Loading Posts! </div>
      )}
    </div>
  );
};

export default Post;

// {userPosts ? (
//   userPosts.map((userPost) => (
//     <h3>{userPosts.title}</h3>
//     {userPosts.location}
//     {userPosts.description}
//     {userPosts.price}
//   ))
// )
