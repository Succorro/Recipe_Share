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
      <img src="/Steak.jpg" alt="food" />
      <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
      <p className="text-gray-600 text-center">Made by: {username}</p>

      <div className="mt-6 flex space-x-4 justify-center">
        <div>
          <h4 className="text-lg font-semibold">
            Prep Time: <span className={spanStyle}>{prep_time} min</span>
          </h4>
        </div>
        <div>
          <h4 className="text-lg font-semibold">
            Cook Time: <span className={spanStyle}>{cooking_time} min</span>
          </h4>
        </div>
        <div>
          <h4 className="text-lg font-semibold">
            Total Time: <span className={spanStyle}>{total_time} min </span>
          </h4>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold">Category: {tags}</h4>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold">Description:</h4>
        <p>{description}</p>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold">Instructions:</h4>
        <div>{instructions}</div>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold">Ingredients:</h4>
        <ul>{ingredients}</ul>
      </div>
    </div>
  );
}
const spanStyle = "text-sm";
export default RecipeDisplay;
