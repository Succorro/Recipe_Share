import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux/es/hooks/useSelector";
function Recipe() {
  const recipes = useSelector((state) => state.recipes.recipes);
  console.log(recipes);
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const recipe = recipes.find((recipe) => recipe.id === recipeId);

  if (!recipe)
    return (
      <>
        <h1>404 Error </h1>
        <p>
          Recipe Not Found, please click on discover page at the top of the
          screen!
        </p>
      </>
    );

  const {
    title,
    description,
    instructions,
    prep_time,
    cooking_time,
    total_time,
    username,
    tags,
    ingredients,
  } = recipe;
  const numberedList = instructions.split(". ").map((word, index) => {
    if (index === 1) return `${index}. ${word}`;
    return `. ${index + 1}. ${word}`;
  });
  const tagsList = tags.map((tag) => <p>{tag.name}</p>);
  const ingredientsList = ingredients.map((ingredient) => (
    <p>
      {ingredient.name} {ingredient.qty} {ingredient.unit}
    </p>
  ));
  console.log(ingredientsList, tagsList, numberedList);
  if (!recipe) return <div id="loader"></div>;
  return (
    <div>
      <h1>{title}</h1>
      <p>Made by: {username}</p>
      <div>
        <h4>Category</h4>
        {tagsList}
      </div>
      <div>
        <div>
          <h4>Description:</h4>
          <p>{description}</p>
          <h4>Instructions:</h4>
          <p>{numberedList}</p>
          <h4>Prep Time:</h4>
          <p>{prep_time}</p>
          <h4>Cook Time:</h4>
          <p>{cooking_time}</p>
          <h4>Total Time:</h4>
          <p>{total_time}</p>
        </div>
        <div>
          <h4>Ingredients:</h4>
          <p>{ingredientsList}</p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
