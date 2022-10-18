import React from "react";

const Register = () => {
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
      const token = await registerUser(username, password);
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
    
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" required />
        <label htmlFor="password">password:</label>
        <input id="password" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
