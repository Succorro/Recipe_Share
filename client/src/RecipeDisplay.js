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
  image,
}) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg m-10">
      <h1 className="text-3xl text-honey font-bold text-center mb-4 mt-5">
        {title}
      </h1>
      <p className="text-honey text-center mt-5">Made by: {username}</p>

      <div className="mt-6 flex space-x-4 justify-center">
        <div>
          <h4 className="text-lg text-honey font-semibold">
            Prep Time: <span className={spanStyle}>{prep_time} min</span>
          </h4>
        </div>
        <div>
          <h4 className="text-lg text-honey font-semibold">
            Cook Time: <span className={spanStyle}>{cooking_time} min</span>
          </h4>
        </div>
        <div>
          <h4 className="text-lg text-honey font-semibold">
            Total Time: <span className={spanStyle}>{total_time} min </span>
          </h4>
        </div>
      </div>
      <img className="max:w-4/12" src={image} alt="food" />
      <div className="mt-4">
        <h4 className="text-lg text-honey font-semibold">Category: {tags}</h4>
      </div>

      <div className="mt-6">
        <h4 className="text-lg text-honey font-semibold">Description:</h4>
        <p className="text-honey">{description}</p>
      </div>

      <div className="mt-6">
        <h4 className="text-lg text-honey font-semibold">Instructions:</h4>
        <div className="text-honey">{instructions}</div>
      </div>

      <div className="mt-6">
        <h4 className="text-lg text-honey font-semibold">Ingredients:</h4>
        <ul className="text-honey">{ingredients}</ul>
      </div>
    </div>
  );
}
const spanStyle = "text-sm";
export default RecipeDisplay;
