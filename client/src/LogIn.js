import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const { login } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        }) 
        .then(res => {
          if (res.ok) {
              res.json().then(user => {
                login(user);
                setUsername("");
                setPassword("");
                navigate.push('/');
              })
          } else { 
              res.json().then(err => {
                setErrors(err.error)
             })  
          }  
        })  
      }  

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username:   </label>
        <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:   </label>
        <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" className="any-btn">Submit</button>
        </form>
        <div>
            <br />
            <br />
            <div>
                {errors ? <h2>{errors}</h2> : null}
            </div>
        </div>
  </div>
  )
}

export default LogIn; 