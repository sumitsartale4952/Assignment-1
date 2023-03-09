import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const naviagte = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      // Redirect to dashboard page upon successful login
      naviagte("/dashboard");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <form className="center" onSubmit={handleSubmit} >
      <h2>Login Form</h2>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <div className="txt_field">
        <span></span>
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter username"
          required
        />
      </div>
      <div className="txt_field">
        <span></span>
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
