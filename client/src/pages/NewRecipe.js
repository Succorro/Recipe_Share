import React from "react";
import RecipeForm from "../features/recipes/RecipeForm";

function NewRecipe() {
  return (
    <div>
      <h1>Looking to inspire?</h1>
      <p>
        Share your creation below, make sure to include as much detail as you
        can.{" "}
      </p>
      <RecipeForm />
    </div>
  );
}

export default NewRecipe;
