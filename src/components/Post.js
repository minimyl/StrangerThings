import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Post = () => {
  const [userPosts, setUserPosts] = useState([]);
  console.log("post", userPosts);

  useEffect(() => {
    const fetchPost = async () => {
      const database = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts"
      );
      const info = await database.json();
      console.log(info.data.posts);
      setUserPosts(info.data.posts);
    };
    fetchPost();
  }, []);
  return (
    <div>
      {userPosts ? (
        userPosts.map((userPost) => (
          <div key={userPost.location}>{userPost.title}</div>
        ))
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};

export default Post;
