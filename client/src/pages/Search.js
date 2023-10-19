import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import RecipeCard from "../RecipeCard";
import RecipeError from "../RecipeError";
function Search() {
  const searchResults = useSelector((state) => state.search.recipes);
  const searchStatus = useSelector((state) => state.search.status);
  console.log("hi");
  console.log(searchResults);

  if (!searchResults) return <RecipeError />;
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
      <ul className="grid grid-cols-3">
        {searchResults.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </ul>{" "}
    </div>
  );
}

export default Search;
