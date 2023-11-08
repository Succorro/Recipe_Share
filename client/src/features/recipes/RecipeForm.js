import React, { useRef, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import IngredientsForm from "./IngredientsForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postRecipes } from "./recipeSlice";
import allTagOptions from "../../allTagOptions";

function RecipeForm() {
  const imageFile = useRef(null);
  const [errors, setErrors] = useState([]);
  const [recipeTags, setRecipeTags] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate();
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

  function handleChange(name, event) {
    let value;
    if (name === "image") {
      value = event.target.files[0];
    } else {
      value = event.target.value;
    }
    const newRecipe = {
      ...recipe,
      [name]: value,
    };
    setRecipe(newRecipe);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("recipe[title]", recipe.title);
    if (imageFile.current.files[0] !== undefined) {
      formData.append("recipe[image]", imageFile.current.files[0]);
    }
    formData.append("recipe[description]", recipe.description);
    formData.append("recipe[instructions]", recipe.instructions);
    formData.append("recipe[prep_time]", recipe.prep_time);
    formData.append("recipe[cooking_time]", recipe.cooking_time);
    ingredients.forEach((ingredient, index) => {
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
    });
    recipeTags.forEach((tag, index) => {
      formData.append(
        `recipe[recipe_tags_attributes][${index}][tag_id]`,
        tag.tag_id
      );
    });

    fetch("/recipes", {
      method: "POST",
      body: formData,
    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => {
          navigate(`/recipes/${r.id}`);
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
            className={inputStyle}
          />
        )}
      />

      <label className={labelStyle}>
        Image:
        <input
          type="file"
          name="image"
          ref={imageFile}
          className="file-input w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </label>
      <label className={labelStyle}>Title</label>
      <input
        type="text"
        name="title"
        onChange={(e) => {
          handleChange("title", e);
        }}
        className={inputStyle}
      />

      <label className={labelStyle}>Description</label>
      <textarea
        type="text"
        name="description"
        onChange={(e) => {
          handleChange("description", e);
        }}
        className={inputStyle}
      />

      <label className={labelStyle}>Instructions</label>
      <textarea
        type="text"
        name="instructions"
        onChange={(e) => {
          handleChange("instructions", e);
        }}
        className={inputStyle}
      />

      <label className={labelStyle}>Prep Time</label>
      <input
        type="number"
        name="prep_time"
        onChange={(e) => handleChange("prep_time", e)}
        className={inputStyle}
      />

      <label className={labelStyle}>Cook Time</label>
      <input
        type="number"
        name="cooking_time"
        onChange={(e) => {
          handleChange("cooking_time", e);
        }}
        className={inputStyle}
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
const labelStyle = "block mt-4 text-sm font-bold text-gray-700";
const inputStyle =
  "w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300";
export default RecipeForm;
