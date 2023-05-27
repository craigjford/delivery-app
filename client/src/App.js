import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import LogIn from "./LogIn";
import UserSignUpForm from "./UserSignUpForm";
import './App.css';

function App() {
  const { loading, loggedIn } = useContext(UserContext);
  
  console.log('loggedIn = ', loggedIn);

  if(loading) return <h1>Loading</h1>

  const isTrue = true;

  return (
    <div className="App">
        <main>
        <NavBar loggedIn={loggedIn} />
          {loggedIn ? (
            <Routes>
              <Route exact="true" path="/" element={<Home isHome={isTrue} />} />
              <Route path="*" element={<Home patch="*" isHome={!isTrue}/>} />
            </Routes>
            ) : (  
            <Routes> 
              <Route exact="true" path="/" element={<Home isHome={isTrue} />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<UserSignUpForm />} />
              <Route path="*" element={<Home path="*" isHome={!isTrue} />} />
            </Routes>  
          )} 
        </main>
    </div>
  );
}

export default App;
