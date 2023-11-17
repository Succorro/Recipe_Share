import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "../RecipeCard";
function Recipes() {
  const recipesState = useSelector((state) => state.recipes);
  const recipes = recipesState.recipes;
  const status = recipesState.recipes;

  let italianRecipes;
  let mexicanRecipes;
  let vegetarianRecipes;

  recipes
    ? (italianRecipes = recipes
        .filter((recipe) => recipe.tags.find((tag) => tag.name === "Italian"))
        .map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />))
    : (italianRecipes = (
        <h1 className="font-bold text-black"> Coming soon...</h1>
      ));
  recipes
    ? (mexicanRecipes = recipes
        .filter((recipe) => recipe.tags.find((tag) => tag.name === "Mexican"))
        .map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />))
    : (mexicanRecipes = (
        <h1 className="font-bold text-black"> Coming soon...</h1>
      ));
  recipes
    ? (vegetarianRecipes = recipes
        .filter((recipe) =>
          recipe.tags.find((tag) => tag.name === "Vegetarian")
        )
        .map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />))
    : (vegetarianRecipes = (
        <h1 className="font-bold text-black"> Coming soon...</h1>
      ));

  const categoryTitleStyle = "ml-5 text-honey ";

  // error handling for temporary unavailable recipes while loading
  if (status === "loading" || status === "failed")
    return <span className="loading loading-spinner loading-lg"></span>;
  return (
    <div>
      <h1 className="flex items-center justify-center text-honey">
        Discover new Recipes
      </h1>{" "}
      <div>
        <h2 className={categoryTitleStyle}>Italian</h2>
        <ul className="grid grid-cols-3">{italianRecipes}</ul>{" "}
        <hr style={{ width: "90%", marginLeft: "5%" }}></hr>
      </div>
      <div>
        <h2 className={categoryTitleStyle}>Mexican</h2>
        <ul className="grid grid-cols-3">{mexicanRecipes}</ul>{" "}
        <hr style={{ width: "90%", marginLeft: "5%" }}></hr>
      </div>
      <div>
        <h2 className={categoryTitleStyle}>Vegetarian</h2>
        <ul className="grid grid-cols-3">{vegetarianRecipes}</ul>{" "}
        <hr style={{ width: "90%", marginLeft: "5%" }}></hr>
      </div>
    </div>
  );
}

export default Recipes;
