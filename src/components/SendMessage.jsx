import React, { useState } from "react";
import { createMessage } from "../api.js";
import { Link } from "react-router-dom";

const SendMessage = (props) => {
  const { messages, setMessages } = props;
  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const messageSubject = event.target[0].value;
      const message = event.target[1].value;
      const token = localStorage.getItem("token");
      const newMessage = await createMessage(
        token,
        messageSubject,
        message,
        messages,
        setMessages
      );
      console.log("logging our newMessage", newMessage);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="box">
        <h4 className="messageTitle">reply to user's post</h4>
        <h5 className="logInTitleBelow">Send Message</h5>
        <form className="logInForm" onSubmit={handleSubmit}>
          <label>Message Subject:</label>
          <input type="text" required /> <br></br>
          <label>Message:</label>
          <input type="text" />
          <button className="logInSubmit" type="submit">
            Send
          </button>
        </form>
        <Link to={`/posts`}>
          <button className="postDetailsButton">Go Back</button>
        </Link>
      </div>
    </>
  );
};
export default SendMessage;
