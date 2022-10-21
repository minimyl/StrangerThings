import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PostsDetails = ({ userPosts, setUserPosts }) => {
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
    console.log("you can't handle the page details");
    setSearchInput(e.target.value);
  };

  return (
    <>
      <h3>this is posts details component</h3>
      <div className="singlePostBody">
        <h3 className="postTitle">{originalPost.title}</h3>
        <div>{originalPost.location}</div>
        <div>{originalPost.description}</div>
        <div>{originalPost.price}</div>
        <label htmlFor="will-deliver">Will Deliver</label>
        <Link to={`/posts`}>
          <button className="postDetailsButton">Go Back</button>
        </Link>
      </div>
    </>
  );
};
export default PostsDetails;
