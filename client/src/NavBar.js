import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from 'react-router-dom';

const navStyles = ({ isActive }) => {
    return {  
      display: "inline-block",
      width: "100px",
      padding: "12px",
      margin: "0 6px 6px",
      background: isActive ? "darkblue" : "blue",
      textDecoration: "none",
      color: "white",
    };
  };  

const NavBar = () => {
    const { loggedIn } = useContext(UserContext);
    // const { loggedIn, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        fetch("/logout", 
        { method: "DELETE" })
        .then((r) => {
          if (r.ok) {
            // logout();
            navigate('/');
          }
        });
      }

  return (
    <header>
        <div className="navbar">
            {loggedIn ? (
            <>
                <NavLink to="/" exact="true" style={navStyles}>Home</NavLink>
                <button className="navbar-btn" onClick={handleLogoutClick}>Logout</button>
                <hr />
                <br />
            </>
        ) : (
            <>
            <NavLink to="/" exact="true" style={navStyles}>Home</NavLink>
            <NavLink to="/login" style={navStyles}>Log In</NavLink>
            <NavLink to="/signup" style={navStyles}>Sign Up</NavLink>  
            <hr />
            </>
        )} 
        </div>
    </header>
  );
}

export default NavBar;