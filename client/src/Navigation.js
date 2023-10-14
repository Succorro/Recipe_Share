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
      <div className="flex-1">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/recipes">Discover Page</Link>
      </div>
      <div className="flex-none navbar-end">
        {login ? (
          <div className="flex-none gap-2">
            <Link className="btn btn-outline btn-warning" to="/recipes/new">
              Post
            </Link>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://static.wikia.nocookie.net/disney/images/5/56/Profile_-_Rex.jpeg"
                    alt="rex"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="justify-between" to="/users/profile">
                    Profile
                  </Link>{" "}
                </li>
                <li>
                  <button
                    className=""
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
                </li>
              </ul>
            </div>
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
