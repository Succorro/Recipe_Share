import React from "react";
import { useSelector } from "react-redux";

function Recipes() {
  const recipes = useSelector((state) => state.recipes.recipes);
  console.log(recipes);
  const displayRecipes = recipes.map((recipe) => {
    return <li key={recipe.id}>{recipe.title}</li>;
  });
  return (
    <div>
      Recipes page <ul>{displayRecipes}</ul>{" "}
    </div>
  );
}

export default Recipes;
