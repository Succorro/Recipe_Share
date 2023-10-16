import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function RecipeError() {
  return (
    <div className="grid min-h-full place-items-center px-6 py-24 m-5 sm:py-32 lg:px-8">
      <p className="text-accent font-semibold">404 Error </p>
      <h1 className="font-bold text-accent">Page not found</h1>
      <p className="text-accent font-semibold">
        Please click on the home button below!{" "}
      </p>
      <Link
        className=" link no-underline rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        to="/"
      >
        Home
      </Link>
    </div>
  );
}

export default RecipeError;
