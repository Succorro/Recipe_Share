import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./userSlice";
import { useNavigate } from "react-router-dom";

function Signup({ toggleForm, words }) {
  const [login, setLogin] = useState({
    bio: "",
    avatar: null,
  });
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const displayErrors = errors.map((error) => (
    <p class="not-prose text-danger" key={error}>
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
    const formData = new FormData();
    formData.append("[username]", login.username);
    formData.append("[email]", login.email);
    formData.append("[bio]", login.bio);
    formData.append("[first_name]", login.first_name);
    formData.append("[last_name]", login.last_name);
    formData.append("[avatar]", "/default_profile.jpeg");

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
          navigate("/");
        });
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }
  return (
    <div className="card md:w-2/5 glass items-center m-auto">
      <div className="flex flex-1 flex-col  px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a New Account
          </h2>{" "}
        </div>
        <div className="mt-5 w-auto ">
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
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                id="firstName"
                name="first_name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                id="lastName"
                name="last_name"
                onChange={handleChange}
              />
            </div>
            <div>
              <p>Password must contain:</p>
              <ul>
                <li>At least 8 Characters</li>
                <li>One Upper/Lower Case Letter</li>
                <li>One Number</li>
                <li>One Special Character</li>
              </ul>
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
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="password"
                id="confirmPassword"
                name="password_confirmation"
                onChange={handleChange}
              />
            </div>
            <button
              className="flex w-full justify-center rounded-md bg-warning px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
        {displayErrors}
        <div className="text-center">
          <p>Already have an account?</p>
        </div>
        <button
          className="flex w-full justify-center rounded-md bg-info px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="button"
          onClick={toggleForm}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Signup;
