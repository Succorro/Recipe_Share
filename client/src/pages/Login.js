import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "../features/user/Signup";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState([]);
  const [login, setLogin] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const words = isLogin ? "checked" : "";
  const toggleForm = () => {
    setTimeout(() => {
      setIsLogin(!isLogin);
    }, 300);
  };
  let displayErrors;
  errors ? (
    (displayErrors = errors.map((error) => (
      <p className="text-danger" key={error}>
        {error}
      </p>
    )))
  ) : (
    <></>
  );

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
          console.log(user);
          dispatch(loginUser(user));
          navigate("/");
        });
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }
  if (!isLogin) return <Signup toggleForm={toggleForm} words={words} />;
  return (
    <div className="card w-96 glass items-center m-auto">
      <div className="flex min-h-full flex-1 flex-col  px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <button
              className="flex w-full justify-center rounded-md bg-info px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        {displayErrors}

        <div className="text-center">
          <p>Don't have an account?</p>
        </div>
        <div className="card-actions justify-center">
          <button
            className="flex w-full justify-center rounded-md bg-warning px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="button"
            onClick={toggleForm}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
