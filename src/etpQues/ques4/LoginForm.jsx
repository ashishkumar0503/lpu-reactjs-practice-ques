import React, { useState } from "react";

// Write a react code for simple login form where the user login by entering
// their username and password. The form inputs are validated to check if correct information
// is entered and the error messages are the validation fails.
// The login form is hidden and the "Welcome, ${name}" message is shown when the
// user login is successfull.

const LoginForm = () => {
  const [isShow, setIsShow] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleName = (e) => {
    let name = e.target.value;
    if (name === "" || name.length <= 6) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const passRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  const handlePassword = (e) => {
    let pass = e.target.value;
    if (pass === "" || !pass.match(passRegEx)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = () => {
    let name = document.getElementById("un").value;
    let pass = document.getElementById("pwd").value;

    if (name === "" || pass === "") {
      alert("Validation Fails");
      setIsShow(false);
    } else {
      alert("Logged In Successfully");
      setName(name);
      setPassword(password);
      setIsShow(true);
      setShowForm(false);
    }
  };

  return (
    <div>
      {showForm && <div>
        <h2>Login</h2>
      <input
        type="text"
        value={name}
        onChange={handleName}
        class="input"
        placeholder="Username"
        id="un"
      />
      <br />
      {nameError && (
        <span style={{ color: "red" }}>
          Username should be of length more than 6
        </span>
      )}
      <br />
      <br />
      <input
        type="Password"
        value={password}
        onChange={handlePassword}
        class="input"
        placeholder="Password"
        id="pwd"
      />
      <br />
      {passwordError && (
        <span style={{ color: "red" }}>
          Password must contain alphabets and numbers
        </span>
      )}
      <br />
      <br />
      <button type="submit" onClick={handleSubmit} >Login</button>
      </div>}
      {isShow && <p>Welcome, {name}</p>}
    </div>
  );
};

export default LoginForm;
