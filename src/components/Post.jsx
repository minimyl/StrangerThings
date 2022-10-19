import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Post = () => {
  const [userPosts, setUserPosts] = useState([]);
  // pass in fetchPosts as props in here??

  useEffect(() => {
    const fetchPost = async () => {
      const database = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts"
      );
      const info = await database.json();
      setUserPosts(info.data.posts);
    };
    fetchPost();
  }, []);
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
