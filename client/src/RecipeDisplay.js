import React from "react";

function RecipeDisplay({
  title,
  description,
  instructions,
  prep_time,
  cooking_time,
  total_time,
  username,
  tags,
  ingredients,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Made by: {username}</p>
      <h4>Category</h4>
      {tags}
      <div>
        <div>
          <h4>Description:</h4>
          <p>{description}</p>
          <h4>Instructions:</h4>
          {instructions}
          <h4>Prep Time:</h4>
          <p>{prep_time}</p>
          <h4>Cook Time:</h4>
          <p>{cooking_time}</p>
          <h4>Total Time:</h4>
          <p>{total_time}</p>
        </div>
        <div>
          <h4>Ingredients:</h4>
          {ingredients}
        </div>
      </div>
    </div>
  );
}

export default RecipeDisplay;
