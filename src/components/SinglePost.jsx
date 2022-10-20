import React from "react";
import { Link } from "react-router-dom";

const SinglePost = (props) => {
  const post = props.post;
  return (
    <div>
      <h3>{post.title}</h3>
      {post.location}
      {post.description}
      {post.price}
      <Link to={`/posts/${post._id}`}>
        <button>Post Details</button>
      </Link>
    </div>
  );
};
export default SinglePost;

// key={userPost._id}
