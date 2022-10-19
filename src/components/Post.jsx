import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Post = (props) => {
const userPosts = props.userPosts
  return (
    <div>
      {userPosts ? (
        userPosts.map((userPost) => (
          <div key={userPost._id}>
            <h3>{userPost.title}</h3>
            <div>
                {userPost.description}
                <div>
                    {userPost.price}
                </div>
            </div>
            </div>
        ))
      ) : ( 
        <h2>loading...</h2>
      )}
    </div>
  );
};

export default Post;
