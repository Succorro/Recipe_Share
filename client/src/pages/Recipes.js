import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "../RecipeCard";
function Recipes() {
  const recipes = useSelector((state) => state.recipes.recipes);

  return (
    <div>
      <h1>Discover new Recipes</h1>{" "}
      <ul className="grid grid-cols-2">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </ul>{" "}
    </div>
  );
}

export default Recipes;
