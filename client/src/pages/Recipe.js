import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import RecipeError from "../RecipeError";
import RecipeDisplay from "../RecipeDisplay";
import RecipeUpdateForm from "../RecipeUpdateForm";
import { deleteRecipes } from "../features/recipes/recipeSlice";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/user/userSlice";

function Recipe() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showDelete, setShowDelete] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const user = useSelector((state) => state.user.user);
  const recipes = useSelector((state) => state.recipes.recipes);

  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  if (!recipe) return <RecipeError />;

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
    image_format,
  } = recipe;

  let image_url;
  image_format ? (image_url = image_format) : (image_url = "/Steak.jpg");
  const numberedList = instructions.split(". ").map((word, index) => {
    return (
      <p key={index}>
        {index + 1}. {word}
      </p>
    );
  });
  const tagsList = tags.map((tag) => (
    <span className="text-sm" key={tag.id}>
      {tag.name}{" "}
    </span>
  ));
  const ingredientsList = ingredients.map((ingredient) => {
    const capitalizedName =
      ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1);
    return (
      <p key={ingredient.id}>
        {capitalizedName} {ingredient.qty} {ingredient.unit}
      </p>
    );
  });

  function handleDelete(deletedRecipe) {
    const recipesToUpdate = user.recipes;
    const updatedRecipes = recipesToUpdate.filter(
      (recipe) => recipe.id !== deletedRecipe.id
    );
    const updatedUser = { ...user, recipes: updatedRecipes };
    fetch(`/recipes/${deletedRecipe.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) navigate("/");
      dispatch(deleteRecipes(deletedRecipe));
      dispatch(updateUser(updatedUser));
    });
  }
  if (user !== null && user.username === username)
    return (
      <>
        {showForm ? (
          <>
            <RecipeUpdateForm
              setShowForm={setShowForm}
              showForm={showForm}
              currentRecipe={recipe}
            />
            <div className="flex justify-center">
              <button
                onClick={() => setShowForm(!showForm)}
                className="btn btn-warning m-10"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <RecipeDisplay
              title={title}
              description={description}
              instructions={numberedList}
              prep_time={prep_time}
              cooking_time={cooking_time}
              total_time={total_time}
              username={username}
              tags={tagsList}
              image={image_url}
              ingredients={ingredientsList}
            />
            {showDelete ? (
              <div className="text-center ">
                <h4 className="text-2xl text-honey">Update your post</h4>
                <div className="flex justify-center">
                  <button
                    className="btn btn-info  m-10 "
                    onClick={() => setShowForm(!showForm)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-error  m-10 "
                    onClick={() => setShowDelete(!showDelete)}
                  >
                    Delete
                  </button>{" "}
                </div>
              </div>
            ) : (
              <div className="text-center text-honey">
                <h4 className="text-honey">Are you sure you want to delete?</h4>
                <div className="flex justify-center">
                  <button
                    className="btn btn-error m-10 "
                    onClick={() => handleDelete(recipe)}
                  >
                    Yes
                  </button>
                  <button
                    className="btn btn-success  m-10 "
                    onClick={() => setShowDelete(!showDelete)}
                  >
                    No
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </>
    );

  return (
    <RecipeDisplay
      title={title}
      description={description}
      instructions={numberedList}
      prep_time={prep_time}
      cooking_time={cooking_time}
      total_time={total_time}
      username={username}
      tags={tagsList}
      image={image_url}
      ingredients={ingredientsList}
    />
  );
}

export default Recipe;
