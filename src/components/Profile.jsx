import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <h4 className="usersMessages">your messages below:</h4>
      <div className="singlePostBody">
        <h3 className="postTitle">message title here...</h3>
        <p>from user: ... here</p>
        <p>message description here...</p>
      </div>
      <Link to={`/posts`}>
        <button className="postDetailsButton">Go Back</button>
      </Link>
    </>
  );
};
export default Profile;
