import React, { useState } from "react";
import Signup from "../Signup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { clickLogin } from "../features/navigationSlice";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [login, setLogin] = useState({});
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
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
    fetch("/login", {
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
      }
      // } else {
      //   r.json().then((error) => setErrors(error.errors));
      // }
    });
  }
  if (!isLogin) return <Signup toggleForm={toggleForm} />;
  return (
    <div>
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
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
        <button className="btn btn-primary" type="submit">
          login
        </button>
      </form>
      <p>
        Don't have an account?
        <button className="btn btn-primary" type="button" onClick={toggleForm}>
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default Login;
