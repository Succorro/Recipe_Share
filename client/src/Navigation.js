import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { logoutUser } from "./features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { searchRecipes } from "./features/search/searchSlice";

function Navigation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const login = useSelector((state) => state.user.login);
  const [searchValue, setSearchValue] = useState("");
  const user = useSelector((state) => state.user.user);
  const avatar = user.avatar_url;
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchRecipes(searchValue));
    history.push("/recipes/search");
  }

  return (
    <div className="navbar text-secondary">
      <div className="flex-1">
        <Link className={linkStyle} to="/">
          Home
        </Link>
        <Link className={linkStyle} to="/about">
          About
        </Link>
        <Link className={linkStyle} to="/recipes">
          Discover Page
        </Link>
      </div>
      <div className="navbar-end">
        <div className=" group bg-amber-50 text-gray-800 rounded p-1.5 shadow-sm ">
          <form className="p-1" onSubmit={handleSubmit}>
            <input
              className="bg-amber-50 invisible hover:visible focus:visible group-hover:visible focus:outline-none font-bold"
              type="search"
              name="search"
              placeholder="Search recipes..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
        {login ? (
          <div className="flex items-center">
            <Link
              className="btn btn-outline btn-warning font-bold m-3"
              to="/recipes/new"
            >
              Post
            </Link>
            <div className="dropdown dropdown-end m-3">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={avatar} alt="rex" />
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
                          console.log(r);
                          dispatch(logoutUser());
                          history.push("/login");
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
const linkStyle = "link link-hover p-2 ml-2 text-honey font-bold ";

export default Navigation;
