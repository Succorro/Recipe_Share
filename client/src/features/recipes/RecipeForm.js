import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import IngredientsForm from "./IngredientsForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { postRecipes } from "./recipeSlice";
import allTagOptions from "../../allTagOptions";

function RecipeForm() {
  const [errors, setErrors] = useState([]);
  const [recipeTags, setRecipeTags] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const displayErrors = errors.map((error) => (
    <p className="text-danger" key={error}>
      {error}
    </p>
  ));
  function handleTags(newValue) {
    const value = newValue.map((tag) => {
      const s = { tag_id: tag.tag_id };
      return s;
    });
    setRecipeTags(value);
  }

  function handleChange(name, value) {
    const newRecipe = {
      ...recipe,
      [name]: value,
    };
    setRecipe(newRecipe);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newRecipe = {
      ...recipe,
      ingredients_attributes: ingredients,
      recipe_tags_attributes: recipeTags,
    };
    console.log(recipe, newRecipe);
    console.log(recipeTags, ingredients);
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => {
          console.log(r);
          history.push(`/recipes/${r.id}`);
          dispatch(postRecipes(r));
        });
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }
  return (
    <form
      className="w-full max-w-screen-md mx-auto p-4 bg-white rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <Autocomplete
        multiple
        id="tags-standard"
        options={allTagOptions}
        isOptionEqualToValue={(option, value) => option.tag_id === value.tag_id}
        getOptionLabel={(option) => option.name}
        onChange={(event, newValue) => {
          handleTags(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Tags"
            placeholder="Categories"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        )}
      />
      <label className="block mt-4 text-sm font-bold text-gray-700">
        Title
      </label>
      <input
        type="text"
        name="title"
        onChange={(e) => {
          const value = e.target.value;
          handleChange("title", value);
        }}
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />

      <label className="block mt-4 text-sm font-bold text-gray-700">
        Description
      </label>
      <textarea
        type="text"
        name="description"
        onChange={(e) => {
          const value = e.target.value;
          handleChange("description", value);
        }}
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />

      <label className="block mt-4 text-sm font-bold text-gray-700">
        Instructions
      </label>
      <textarea
        type="text"
        name="instructions"
        onChange={(e) => {
          const value = e.target.value;
          handleChange("instructions", value);
        }}
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />

      <label className="block mt-4 text-sm font-bold text-gray-700">
        Prep Time
      </label>
      <input
        type="number"
        name="prep_time"
        onChange={(e) => handleChange("prep_time", e.target.value)}
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />

      <label className="block mt-4 text-sm font-bold text-gray-700">
        Cook Time
      </label>
      <input
        type="number"
        name="cooking_time"
        onChange={(e) => {
          const value = e.target.value;
          handleChange("cooking_time", value);
        }}
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />

      <IngredientsForm
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      {displayErrors}
      <button
        type="submit"
        className="block mt-4 px-4 py-2 bg-success text-white rounded-md hover:bg-green-300 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
}

export default RecipeForm;
