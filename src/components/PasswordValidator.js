import React, { useState } from "react";
import validator from "validator";

const PasswordValidator = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validatePassword = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is Strong Password");
    } else {
      setErrorMessage("Is Not Strong Password");
    }
  };

  return (
    <div>
      <span>Enter Password: </span>
      <input
        type="text"
        onChange={(e) => validatePassword(e.target.value)}
      />
      <br />
      {errorMessage && (
        <span
          style={{
            fontWeight: "bold",
            color: errorMessage === "Is Strong Password" ? "green" : "red",
          }}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default PasswordValidator;
