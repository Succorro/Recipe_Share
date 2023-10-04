import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { logoutUser } from "./features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { clickLogin } from "./features/navigationSlice";

function Navigation() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.login);
  return (
    <div className="navbar text-secondary">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/recipes">Discover Page</Link>
      {login ? (
        <div>
          <Link to="/users/profile">Profile</Link>
          <button
            className="btn btn-secondary"
            onClick={() => {
              dispatch(clickLogin(false));
              fetch("/logout", {
                method: "DELETE",
              }).then((r) => {
                if (r.ok) {
                  dispatch(logoutUser());
                }
                // } else {
                //   r.json().then((error) => setErrors(error.errors));
                // }
              });
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link className="btn btn-secondary" to="/login">
          Login
        </Link>
      )}
    </div>
  );
}

export default Navigation;
