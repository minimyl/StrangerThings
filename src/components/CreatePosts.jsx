import React from "react"
import {createPost} from "../api.js"

const CreatePosts = () => {
    async function handleSubmit(event) {
        try {
          event.preventDefault();
          const username = event.target[0].value;
          const password = event.target[1].value;
          // console.log(username)
          // console.log(password)
          const token = await registerUser(username, password);
          localStorage.removeItem("token");
          localStorage.setItem("token", token);
        } catch (error) {
          console.log(error);
        }
      }
}


  export default CreatePosts