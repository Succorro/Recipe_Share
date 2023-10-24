import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "../RecipeCard";
function Recipes() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const italianRecipes = recipes.filter((recipe) =>
    recipe.tags.find((tag) => tag.name === "Italian")
  );
  const mexicanRecipes = recipes.filter((recipe) =>
    recipe.tags.find((tag) => tag.name === "Mexican")
  );
  const vegetarianRecipes = recipes.filter((recipe) =>
    recipe.tags.find((tag) => tag.name === "Vegetarian")
  );
  const categoryTitleStyle = "ml-5 text-honey ";
  return (
    <div>
      <h1 className="flex items-center justify-center text-honey">
        Discover new Recipes
      </h1>{" "}
      <div>
        <h2 className={categoryTitleStyle}>Italian</h2>
        <ul className="grid grid-cols-3">
          {italianRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </ul>{" "}
        <hr style={{ width: "90%", marginLeft: "5%" }}></hr>
      </div>
      <div>
        <h2 className={categoryTitleStyle}>Mexican</h2>
        <ul className="grid grid-cols-3">
          {mexicanRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </ul>{" "}
        <hr style={{ width: "90%", marginLeft: "5%" }}></hr>
      </div>
      <div>
        <h2 className={categoryTitleStyle}>Vegetarian</h2>
        <ul className="grid grid-cols-3">
          {vegetarianRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </ul>{" "}
        <hr style={{ width: "90%", marginLeft: "5%" }}></hr>
      </div>
    </div>
  );
}

export default Recipes;
