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
    <div className="bg-white p-4 shadow-md rounded-lg m-4">
      <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
      <p className="text-gray-600 text-center">Made by: {username}</p>

      <div className="mt-6 flex space-x-4 justify-center">
        <div>
          <h4 className="text-lg font-semibold">Prep Time:</h4>
          <p>{prep_time} minutes</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Cook Time:</h4>
          <p>{cooking_time} minutes</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Total Time:</h4>
          <p>{total_time} minutes</p>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold">Category</h4>
        <div className="flex space-x-2">{tags}</div>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold">Description:</h4>
        <p>{description}</p>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold">Instructions:</h4>
        <p>{instructions}</p>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold">Ingredients:</h4>
        <ul>{ingredients}</ul>
      </div>
    </div>
  );
}

export default RecipeDisplay;
