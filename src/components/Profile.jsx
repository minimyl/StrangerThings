import React, { useState } from "react";
import { createMessage } from "../api.js";

const Profile = (props) => {
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
        <h4 className="logInTitle">User Profile</h4>
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
      </div>
    </>
  );
};
export default Profile;
