import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const { title, description, total_time, username, tags, image_format } =
    recipe;
  let image_url;
  // if (image_format === null) {
  //   return (image_url = "/Steak.jpg");
  // } else {
  //   return (image_url = image_format.url);
  // };
  image_format ? (image_url = image_format.url) : (image_url = "/Steak.jpg");
  const tagsList = tags.map((tag) => ` ${tag.name}`);
  const displayPopup = (
    <div className="text-honey">
      <h1 className="text-honey">{title}</h1>
      <p>Made by: {username}</p>
      <h4 className="text-honey">
        Total Time: <span className="">{total_time} minutes</span>
      </h4>
      <h4 className="text-honey">Categories: {tagsList}</h4>

      <div>
        <div>
          <h4 className="text-honey">Description:</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  const style = isExpanded ? hoverStyle : cardStyle;
  const hidden = isExpanded ? popupStyle : hiddenStyle;
  return (
    <div
      onClick={() => navigate(`/recipes/${recipe.id}`)}
      className="hover:cursor-pointer p-0 m-0"
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={hidden}
      >
        {displayPopup}
      </div>
      <article
        key={recipe.id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={style}
        className="max-w-sm max-h-[400px] bg-amber-50 border border-gray-200 rounded-lg shadow dark:bg-amber-50 dark:border-honey"
      >
        {" "}
        <img
          className="rounded-t-lg mt-0 max-h-64 w-full object-fill"
          src={image_url}
          alt="food"
        />
        <div className="p-5 pt-0">
          <h2 className="mb-1 text-xl font-bold tracking-tight text-honey dark:text-honey">
            {recipe.title}
          </h2>
          <p className="mb-3 font-normal text-honey">
            Made by: {recipe.username}
          </p>
        </div>
      </article>
    </div>
  );
}

const cardStyle = {
  transition: "transform 0.2s ease-in-out",
};
const hoverStyle = {
  ...cardStyle,
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
