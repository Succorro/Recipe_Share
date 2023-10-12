import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import IngredientsForm from "./features/recipes/IngredientsForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { patchRecipes } from "./features/recipes/recipeSlice";
import allTagOptions from "./allTagOptions";

function RecipeUpdateForm({ currentRecipe }) {
  const { ingredients, tags, ...recipe } = currentRecipe;
  const formattedTags = tags.map((tag) => {
    return { tag_id: tag.id, name: tag.name };
  });
  console.log(tags);
  const [modifiedRecipe, setModifiedRecipe] = useState(recipe);
  const [modifiedTags, setModifiedTags] = useState(formattedTags);
  const [modifiedIngredients, setModifiedIngredients] = useState(ingredients);

  const history = useHistory();
  const dispatch = useDispatch();
  console.log(tags);
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
    const oldIngredients = ingredients
      .filter((ing) => !uniqueIngredients.includes(ing))
      .map((ing) => ({ ...ing, _destroy: true }));

    const oldTags = tags
      .filter((tag) => !uniqueTags.some((utag) => utag.tag_id === tag.tag_id))
      .map((tag) => ({ ...tag, _destroy: true }));

    const tagArray = oldTags.concat(uniqueTags);
    const ingredientsArray = oldIngredients.concat(uniqueIngredients);

    const updatedRecipe = {
      ...modifiedRecipe,
      ingredients_attributes: modifiedIngredients,
      recipe_tags_attributes: tagArray,
    };
    console.log(updatedRecipe);
    console.log("tags:", tagArray);
    console.log("ingredients:", ingredientsArray);

    // fetch(`/recipes/${updatedRecipe.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(updatedRecipe),
    // }).then((r) => {
    //   if (r.ok) {
    //     r.json().then((r) => {
    //       console.log(r);
    //       history.push(`/recipes/${r.id}`);
    //       dispatch(patchRecipes(r));
    //     });
    //   } else {
    //     r.json().then((error) => {
    //       console.log(error);
    //       setErrors(error.errors);
    //     });
    //   }
    // });
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
          console.log(event.target.value);
          console.log("val:", newValue);
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
