import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import IngredientsForm from "./features/recipes/IngredientsForm";
import { useDispatch } from "react-redux";
import { patchRecipes } from "./features/recipes/recipeSlice";
import allTagOptions from "./allTagOptions";

function RecipeUpdateForm({ currentRecipe, setShowForm, showForm }) {
  const { ingredients, recipe_tags, tags, ...recipe } = currentRecipe;
  const formattedTags = recipe_tags.map((tag) => {
    const name = tags.find((t) => t.id === tag.tag_id).name;
    const updatedTag = { ...tag, name: name };
    return updatedTag;
  });

  const [modifiedRecipe, setModifiedRecipe] = useState(recipe);
  const [modifiedTags, setModifiedTags] = useState(formattedTags);
  const [modifiedIngredients, setModifiedIngredients] = useState(ingredients);

  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const displayErrors = errors.map((error) => (
    <p className="text-danger" key={error}>
      {error}
    </p>
  ));
  const handleChange = (name, value) => {
    setModifiedRecipe({ ...modifiedRecipe, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const uniqueIngredients = Array.from(new Set(modifiedIngredients));
    const uniqueTags = Array.from(new Set(modifiedTags));

    // Handle removed ingredients and tags
    const deleteIngredients = ingredients
      .filter((ing) => !uniqueIngredients.includes(ing))
      .map((ing) => ({ ...ing, _destroy: true }));

    const tagArray = recipe_tags.map((tag) => {
      const existingTag = uniqueTags.find((utag) => utag.tag_id === tag.tag_id);
      if (existingTag) {
        uniqueTags.splice(uniqueTags.indexOf(existingTag), 1); // Remove the tag from the new tags
        return tag; // Tag exists in the updated list
      } else {
        return { ...tag, _destroy: true }; // Tag is marked for deletion
      }
    });

    const ingredientsArray = deleteIngredients.concat(uniqueIngredients);
    tagArray.push(...uniqueTags);

    const updatedRecipe = {
      ...modifiedRecipe,
      ingredients_attributes: ingredientsArray,
      recipe_tags_attributes: tagArray,
    };

    fetch(`/recipes/${updatedRecipe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => {
          dispatch(patchRecipes(r));
          setShowForm(!showForm);
        });
      } else {
        r.json().then((error) => {
          console.log(error);
          setErrors(error.errors);
        });
      }
    });
  }
  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={allTagOptions}
        isOptionEqualToValue={(option, value) => option.tag_id === value.tag_id}
        getOptionLabel={(option) => option.name}
        value={modifiedTags}
        onChange={(event, newValue) => {
          setModifiedTags(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Tags"
            placeholder="Categories"
          />
        )}
      />
      <label className="label">Title </label>
      <input
        type="text"
        name="title"
        value={modifiedRecipe.title}
        onChange={(e) => {
          const value = e.target.value;
          handleChange("title", value);
        }}
      />

      <label className="label">Description </label>
      <textarea
        type="text"
        name="description"
        value={modifiedRecipe.description}
        onChange={(e) => {
          const value = e.target.value;
          handleChange("description", value);
        }}
      />

      <label className="label">Instructions</label>
      <textarea
        type="text"
        name="instructions"
        value={modifiedRecipe.instructions}
        onChange={(e) => {
          const value = e.target.value;
          handleChange("instructions", value);
        }}
      />

      <label className="label">Prep Time</label>
      <input
        type="number"
        name="prep_time"
        value={modifiedRecipe.prep_time}
        onChange={(e) => handleChange("prep_time", e.target.value)}
      />

      <label className="label">Cook Time</label>
      <input
        type="number"
        name="cooking_time"
        value={modifiedRecipe.cooking_time}
        onChange={(e) => {
          const value = e.target.value;
          handleChange("cooking_time", value);
        }}
      />

      <IngredientsForm
        ingredients={modifiedIngredients}
        setIngredients={setModifiedIngredients}
      />
      {displayErrors}
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}

export default RecipeUpdateForm;
