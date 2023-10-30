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

    // Create arrays with some data: 'modifiedIngredients' and 'modifiedTags'.
    // Remove duplicates and obtain unique arrays:
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
    const formData = new FormData();
    formData.append("recipe[title]", updatedRecipe.title);
    formData.append("recipe[description]", updatedRecipe.description);
    formData.append("recipe[instructions]", updatedRecipe.instructions);
    formData.append("recipe[prep_time]", updatedRecipe.prep_time);
    formData.append("recipe[cooking_time]", updatedRecipe.cooking_time);
    formData.append("recipe[image]", updatedRecipe.image);
    ingredientsArray.forEach((ingredient, index) => {
      formData.append(
        `recipe[ingredients_attributes][${index}][name]`,
        ingredient.name
      );
      formData.append(
        `recipe[ingredients_attributes][${index}][qty]`,
        ingredient.qty
      );
      formData.append(
        `recipe[ingredients_attributes][${index}][unit]`,
        ingredient.unit
      );
      if (ingredient._destroy !== undefined) {
        formData.append(
          `recipe[ingredients_attributes][${index}][_destroy]`,
          ingredient._destroy
        );
      }
    });
    tagArray.forEach((tag, index) => {
      if (tag.id !== undefined) {
        formData.append(`recipe[recipe_tags_attributes][${index}][id]`, tag.id);
      }
      if (tag.tag_id !== undefined) {
        formData.append(
          `recipe[recipe_tags_attributes][${index}][tag_id]`,
          tag.tag_id
        );
      }
      if (tag._destroy !== undefined) {
        formData.append(
          `recipe[recipe_tags_attributes][${index}][_destroy]`,
          tag._destroy
        );
      }
    });
    fetch(`/recipes/${modifiedRecipe.id}`, {
      method: "PATCH",
      body: formData,
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
    <form
      className="w-full max-w-screen-md mx-auto p-4 bg-white rounded-lg shadow-lg"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
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
      <label className={labelStyle}>
        Image:
        <input
          type="file"
          name="image"
          onChange={(e) => {
            const file = e.target.files[0];
            handleChange("image", file);
          }}
          className="file-input w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <p className="text-primary mt-0 mb-5">
          By changing this value a new image will be shown on recipe
        </p>
      </label>
      <label className={labelStyle}>Title </label>
      <input
        className={inputStyle}
        type="text"
        name="title"
        value={modifiedRecipe.title}
        onChange={(e) => {
          const value = e.target.value;
          handleChange("title", value);
        }}
      />

      <label className={labelStyle}>Description </label>
      <textarea
        className={inputStyle}
        type="text"
        name="description"
        value={modifiedRecipe.description}
        onChange={(e) => {
          const value = e.target.value;
          handleChange("description", value);
        }}
      />

      <label className={labelStyle}>Instructions</label>
      <textarea
        className={inputStyle}
        type="text"
        name="instructions"
        value={modifiedRecipe.instructions}
        onChange={(e) => {
          const value = e.target.value;
          handleChange("instructions", value);
        }}
      />

      <label className={labelStyle}>Prep Time</label>
      <input
        className={inputStyle}
        type="number"
        name="prep_time"
        value={modifiedRecipe.prep_time}
        onChange={(e) => handleChange("prep_time", e.target.value)}
      />

      <label className={labelStyle}>Cook Time</label>
      <input
        className={inputStyle}
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
      <button type="submit" className="btn btn-success mt-5">
        Submit
      </button>
    </form>
  );
}
const labelStyle = "block mt-4 text-sm font-bold text-gray-700";
const inputStyle =
  "w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300";

export default RecipeUpdateForm;
