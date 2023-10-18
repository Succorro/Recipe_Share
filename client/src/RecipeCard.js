import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function RecipeCard({ recipe }) {
  const history = useHistory();
  return (
    <article
      key={recipe.id}
      className="card bg-accent max-w-[360px] m-5  h-[50vh]"
      onClick={() => history.push(`/recipes/${recipe.id}`)}
    >
      <div className="card-body max-w-xs p-0 ml-5">
        {" "}
        <img className="static  pb-0 mb-0 block" src="/Steak.jpg" alt="food" />
      </div>
      <div className="card-body p-0 ml-1 mt-0 pt-0 ">
        <h2 className="card-title">{recipe.title}</h2>

        <p className="">Cuisine:{recipe.tags.map((tag) => ` ${tag.name}`)}</p>
      </div>
    </article>
  );
}

export default RecipeCard;
