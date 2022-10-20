import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { SinglePost } from "./";

const Post = (props) => {
  // const [posts, setAllPosts] = useState([]);
  const { id } = useParams();
  const userPosts = props.userPosts;
  console.log(userPosts);
  return (
    <div>
      {id ? (
        <Outlet context={filterPosts()} />
      ) : userPosts.length ? (
        userPosts.map((post) => {
          console.log(post)
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
