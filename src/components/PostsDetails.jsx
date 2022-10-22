import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deletePost, updatePost } from "../api.js";

const PostsDetails = ({ userPosts, setUserPosts }) => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [originalPost, setOriginalPost] = useState({});
  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    willDeliver: "",
  });
  useEffect(() => {
    const post = filterPostsDetails()[0];

    setFormDetails(post);
    setOriginalPost(post);
  }, []);

  function filterPostsDetails() {
    let filteredPosts = userPosts.filter((found) => {
      return found._id == postId;
    });
    return filteredPosts;
  }

  const handleChange = (e) => {
    e.preventDefault();

    setSearchInput(e.target.value);
  };

  async function handleDelete(e) {
    console.log(e, "eeeeeeeee");
    e.preventDefault();
    const toDelete = e.target.id;
    const token = localStorage.getItem("token");
    const deleted = await deletePost(toDelete, token);
    if (deleted) {
      const newPosts = userPosts.filter((post) => post._id != toDelete);
      setUserPosts(newPosts);
      navigate("/posts");
    }
  }

  return (
    <>
      <h3 className="messageTitle">Post Details:</h3>
      {originalPost && originalPost.title ? (
        <div className="singlePostBody">
          <h3 className="postTitle">{originalPost.title}</h3>
          <div>{originalPost.location}</div>
          <div>{originalPost.description}</div>
          <div>{originalPost.price}</div>
          <label htmlFor="will-deliver">Will Deliver</label>
          <button
            className="postDetailsButton"
            id={originalPost._id ? `${originalPost._id}` : null}
            onClick={(e) => {
              handleDelete(e);
            }}
          >
            Delete Post
          </button>
          <Link to={`/posts`}>
            <button className="postDetailsButton">Go Back</button>
          </Link>
        </div>
      ) : null}
    </>
  );
};
export default PostsDetails;
