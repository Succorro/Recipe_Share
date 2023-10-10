import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Recipes() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const history = useHistory();
  const displayRecipes = recipes.map((recipe) => {
    return (
      <div
        className="card w-96 bg-secondary pt-0 m-10 shadow-xl"
        onClick={() => history.push(`/recipes/${recipe.id}`)}
      >
        <div className="card-body">
          <h2 className="card-title">{recipe.title}</h2>
          <p>
            {recipe.tags.map((tag) => (
              <p>{tag.name}</p>
            ))}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div>
      Recipes page <ul>{displayRecipes}</ul>{" "}
    </div>
  );
}

export default Recipes;
