import React, { useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux/es/hooks/useSelector";
import RecipeError from "../RecipeError";
import RecipeDisplay from "../RecipeDisplay";
import RecipeUpdateForm from "../RecipeUpdateForm";
import { deleteRecipes } from "../features/recipes/recipeSlice";
import { useDispatch } from "react-redux";

function Recipe() {
  const user = useSelector((state) => state.user.user);
  const recipes = useSelector((state) => state.recipes.recipes);
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  const [showDelete, setShowDelete] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

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
  } = recipe;
  const numberedList = instructions.split(". ").map((word, index) => {
    return (
      <p key={index}>
        {index + 1}. {word}
      </p>
    );
  });
  const tagsList = tags.map((tag) => <p key={tag.id}>{tag.name}</p>);
  const ingredientsList = ingredients.map((ingredient) => (
    <p key={ingredient.id}>
      {ingredient.name} {ingredient.qty} {ingredient.unit}
    </p>
  ));

  function handleDelete(deletedRecipe) {
    console.log("delete");
    fetch(`/recipes/${deletedRecipe.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) history.push("/");
      dispatch(deleteRecipes(deletedRecipe));
    });
  }
  if (user.username === username)
    return (
      <>
        {showForm ? (
          <>
            <RecipeUpdateForm
              setShowForm={setShowForm}
              showForm={showForm}
              currentRecipe={recipe}
            />
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn btn-warning"
            >
              Cancel
            </button>
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
              ingredients={ingredientsList}
            />
            {showDelete ? (
              <>
                <button
                  className="btn btn-info"
                  onClick={() => setShowForm(!showForm)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => setShowDelete(!showDelete)}
                >
                  Delete
                </button>{" "}
              </>
            ) : (
              <>
                <h4>Are you sure you want to delete?</h4>
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(recipe)}
                >
                  Yes
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => setShowDelete(!showDelete)}
                >
                  No
                </button>
              </>
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
      ingredients={ingredientsList}
    />
  );
}

export default Recipe;
