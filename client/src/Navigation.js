import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navigation() {
  const [login, setLogin] = useState(true);

  return (
    <div class="navbar text-secondary">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/recipes">Discover Page</Link>
      {login ? (
        <div>
          <Link to="/users/profile">Profile</Link>
          <button
            class="btn btn-secondary"
            onClick={() => {
              setLogin(false);
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link class="btn btn-secondary" to="/login">
          Login
        </Link>
      )}
    </div>
  );
}

export default Navigation;
