import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function RecipeCard({ recipe }) {
  const { title, description, total_time, username, tags } = recipe;
  const tagsList = tags.map((tag) => ` ${tag.name}`);
  const dispalyCard = (
    <div>
      <h1>{title}</h1>
      <p>Made by: {username}</p>
      <h4>
        Total Time: <span className="">{total_time} minutes</span>
      </h4>
      <h4>Categories: {tagsList}</h4>

      <div>
        <div>
          <h4>Description:</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
  const history = useHistory();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  const style = isExpanded ? hoverStyle : articleStyle;
  const hidden = isExpanded ? popupStyle : hiddenStyle;
  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={hidden}
        onClick={() => history.push(`/recipes/${recipe.id}`)}
      >
        {dispalyCard}
      </div>
      <article
        key={recipe.id}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="card bg-honey max-w-[360px] m-5  h-[50vh]"
        onClick={() => history.push(`/recipes/${recipe.id}`)}
      >
        <div className="card-body max-w-[320px] p-0 ml-5">
          {" "}
          <img className="  pb-0 mb-0 block" src="/Steak.jpg" alt="food" />
        </div>
        <div className="card-body p-0 ml-1 mt-0 pt-0 ">
          <h2 className="card-title text-white ml-3">{recipe.title}</h2>
        </div>
      </article>
    </div>
  );
}

const articleStyle = {
  transition: "transform 0.2s ease-in-out",
};
const hoverStyle = {
  ...articleStyle,
  transform: "scale(1.05)",
};

const hiddenStyle = {
  display: "none",
};

const popupStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  zIndex: 10,
  transform: "translate(-50%, -50%) ",
  backgroundColor: "white",
  width: "80vw",
  height: "60vh",
  padding: "5vw",
  borderRadius: "15px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
};

export default RecipeCard;
