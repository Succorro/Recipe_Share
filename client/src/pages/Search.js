import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import RecipeCard from "../RecipeCard";
import { Link } from "react-router-dom";
function Search() {
  const searchResults = useSelector((state) => state.search.recipes);
  const searchStatus = useSelector((state) => state.search.status);
  let displayResults;
  if (searchResults[0] === undefined) {
    displayResults = (
      <div>
        <h1 className="text-3xl font-bold text-gray-500 m-10">
          Unfortunately No Results Were Found
        </h1>
        <Link
          className=" link no-underline rounded-md bg-gray-500 m-10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          to="/"
        >
          <span>←</span> Back to home
        </Link>
      </div>
    );
  } else {
    displayResults = (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {searchResults.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    );
  }
  if (searchStatus === "loading")
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="flex text-honey">Recipes are loading</h1>
        <span className="loading loading-dots loading-lg text-honey"> </span>
      </div>
    );
  return (
    <div className="">
      <h1 className=" flex items-center justify-center text-honey">
        Search Results
      </h1>
      {displayResults}
    </div>
  );
}

export default Search;
