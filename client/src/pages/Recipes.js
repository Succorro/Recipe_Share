import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Recipes() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const history = useHistory();
  const displayRecipes = recipes.map((recipe) => {
    return (
      <div
        key={recipe.id}
        className="card w-96 bg-secondary pt-0 m-10 shadow-xl"
        onClick={() => history.push(`/recipes/${recipe.id}`)}
      >
        <div className="card-body">
          <h2 className="card-title">{recipe.title}</h2>

          {recipe.tags.map((tag) => (
            <p key={tag.id}>{tag.name}</p>
          ))}
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1>Discover new Recipes</h1> <ul>{displayRecipes}</ul>{" "}
    </div>
  );
}

export default Recipes;
