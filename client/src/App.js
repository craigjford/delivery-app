import React, { useContext } from "react";
import { UserContext } from "./context/user";
import logo from './logo.svg';
import './App.css';

function App() {
  // const { loading } = useContext(UserContext);
  

  if(loading) return <h1>Loading</h1>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
