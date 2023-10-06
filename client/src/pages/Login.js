import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Signup from "../features/user/Signup";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState([]);
  const [login, setLogin] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

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
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          history.push("/");
          dispatch(loginUser(user));
        });
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
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
      {displayErrors}

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
