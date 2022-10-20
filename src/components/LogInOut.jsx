import React from "react";

const LogInOut = () => {
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
              password
            },
          }),
        }
      );
      const resp = await resultLogIn.json();  
      return resp.data
      
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
      const token = registeredUser.token
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
    // console.log(token, 'i am token')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input minLength='8' id="username" type="text" required />
        <label htmlFor="password">Password:</label>
        <input minLength='8' id="password" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LogInOut
