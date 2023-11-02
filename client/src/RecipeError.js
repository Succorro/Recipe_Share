import React from "react";
import { Link } from "react-router-dom";

function RecipeError() {
  return (
    <div>
      <img
        className="m-0 absolute -z-10"
        src="/cookiesBakingSheet.jpg"
        alt="cookies"
      />
      <div className=" bg-opacity-100 grid min-h-full place-items-center px-6 py-24 m-5 sm:py-32 lg:px-8 z-10">
        <p className="text-accent font-semibold">404 Error </p>
        <h1 className="font-bold text-accent">Page not found</h1>
        <p className="text-accent font-semibold">
          Please click on the home button below!{" "}
        </p>
        <Link
          className=" link no-underline rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          to="/"
        >
          <span>←</span> Back to home
        </Link>
      </div>
    </div>
  );
}

export default RecipeError;
