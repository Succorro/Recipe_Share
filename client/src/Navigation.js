import React from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { logoutUser } from "./features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Navigation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const login = useSelector((state) => state.user.login);
  return (
    <div className="navbar text-secondary">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/recipes">Discover Page</Link>
      </div>
      <div>
        {login ? (
          <div>
            <Link to="/users/profile">Profile</Link>
            <Link className="btn btn-outline btn-warning" to="/recipes/new">
              Post
            </Link>
            <button
              className="btn btn-outline btn-error"
              onClick={() => {
                fetch("/logout", {
                  method: "DELETE",
                }).then((r) => {
                  if (r.ok) {
                    history.push("/login");
                    dispatch(logoutUser());
                  }
                });
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link className="btn btn-outline btn-secondary" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navigation;
