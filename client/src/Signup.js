import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./features/user/userSlice";
import { clickLogin } from "./features/navigationSlice";

function Signup({ toggleForm }) {
  const [login, setLogin] = useState({});
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const displayErrors = errors.map((error) => (
    <p className="text-danger" key={error}>
      {error}
    </p>
  ));

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const newInfo = {
      ...login,
      [name]: value,
    };
    setLogin(newInfo);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(login);
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          dispatch(loginUser(user));
          dispatch(clickLogin(true));
        });
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="first_name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="last_name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>
        <button className="btn btn-primary" type="submit">
          Sign Up
        </button>
      </form>
      {displayErrors}
      <p>
        Already have an account?
        <button className="btn btn-primary" type="button" onClick={toggleForm}>
          Login
        </button>
      </p>
    </>
  );
}

export default Signup;
