import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PasswordValidator from "././components/PasswordValidator"; // Import the component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Checking Password Strength in ReactJS</h2>
        <PasswordValidator />
      </header>
    </div>
  );
}

export default App;
