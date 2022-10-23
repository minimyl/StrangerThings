import React from "react";
import { useNavigate, Link } from "react-router-dom";

const LogInOut = () => {
  const navigate = useNavigate();
  async function logInUser(username, password) {
    try {
      const resultLogIn = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username,
              password,
            },
          }),
        }
      );
      const resp = await resultLogIn.json();
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const username = event.target[0].value;
      const password = event.target[1].value;
      const registeredUser = await logInUser(username, password);
      const token = registeredUser.token;
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="box">
      <h4 className="logInTitle">Welcome Back!</h4>
      <p className="logInTitleBelow">Please Log in Below.</p>
      <form className="logInForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input minLength="8" id="username" type="text" required /> <br></br>
        <label htmlFor="password">Password:</label>
        <input minLength="8" id="password" type="text" />
        <button className="logInSubmit" type="submit">
          Submit
        </button>
      </form>
      <Link to={`/posts`}>
        <button className="postDetailsButton">Go Back</button>
      </Link>
    </div>
  );
};

export default LogInOut;
