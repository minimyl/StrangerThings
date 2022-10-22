import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  async function registerUser(username, password) {
    try {
      const result = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: username,
              password: password,
            },
          }),
        }
      );
      const response = await result.json();
      return response.data.token;
    } catch (error) {
      console.log(error);
    }
  }
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
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="box">
      <h4 className="logInTitle">Register</h4>
      <p className="logInTitleBelow">For First Time Users</p>
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

export default Register;
