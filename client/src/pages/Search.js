import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import RecipeCard from "../RecipeCard";
import RecipeError from "../RecipeError";
function Search() {
  const searchResults = useSelector((state) => state.search.recipes);
  console.log("hi");
  console.log(searchResults);

  //   if (!searchResults) return <RecipeError />;
  return (
    <div>
      <h1>Search Results</h1>
      <ul className="grid grid-cols-3">
        {searchResults.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </ul>{" "}
    </div>
  );
}

export default Search;
