import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"; 
import validator from 'validator'

function App() {
  const [errorMessage, setErrorMessage] = useState('') 
  
  const validate = (value) => { 

      if (validator.isStrongPassword(value, { 
          minLength: 8, minLowercase: 1, 
          minUppercase: 1, minNumbers: 1, minSymbols: 1 
      })) { 
          setErrorMessage('Is Strong Password') 
      } else { 
          setErrorMessage('Is Not Strong Password') 
      } 
  } 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div> 
            <span>Enter Password: </span>
            <input type="text"
                onChange={(e) => validate(e.target.value)}></input> <br /> 
            {errorMessage === '' ? null : 
              <span style={{ 
                fontWeight: 'bold', 
                color: 'red', 
              }}>{errorMessage}</span>
            } 
        </div> 
      </header>
    </div>
  );
}

export default App;
