import React, { useState } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        {!isLogin && (
          <>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
            </div>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
          </>
        )}
        <button class="btn btn-primary" type="submit">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button class="btn btn-primary" type="button" onClick={toggleForm}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default Login;
