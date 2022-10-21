import React from "react";
import { createPost } from "../api.js";

const CreatePosts = (props) => {
    const {userPosts, setUserPosts} = props
  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const title = event.target[0].value;
      const description = event.target[1].value;
      const price = event.target[2].value;
      const willDeliver = true
      const token = localStorage.getItem('token')
      const newPost = await createPost(token, title, description, price, willDeliver, userPosts, setUserPosts );
      console.log(newPost)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h4>Create Post</h4>
      <form className="logInForm" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input id="username" type="text" required /> <br></br>
        <label>Description:</label>
        <input id="password" type="text" />
        <label>Price:</label>
        <input id="username" type="text" required /> <br></br>
        <label>Will Deliver?</label>
        {/* <input id="willDeliver" type="boolean" required /> */}
        <button className="logInSubmit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePosts;
