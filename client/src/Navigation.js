import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navigation() {
  const [login, setLogin] = useState(false);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Link class="link-secondary" to="/">
        Home
      </Link>
      <Link to="/about">About</Link>
      <Link to="/recipes">Discover Page</Link>
      {login ? (
        <div>
          <Link to="/users/profile">Profile</Link>
          <button
            onClick={() => {
              setLogin(false);
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}

export default Navigation;
