import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import IngredientsForm from "./IngredientsForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { postRecipes } from "./recipeSlice";

function RecipeForm() {
  const [errors, setErrors] = useState([]);
  const [recipeTags, setRecipeTags] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const tags = [
    {
      tag_id: 1,
      name: "Mexican",
    },
    {
      tag_id: 2,
      name: "Italian",
    },
    {
      tag_id: 3,
      name: "Vegetarian",
    },
    {
      tag_id: 4,
      name: "Chinese",
    },
    {
      tag_id: 5,
      name: "Indian",
    },
    {
      tag_id: 6,
      name: "Japanese",
    },
    {
      tag_id: 7,
      name: "Thai",
    },
    {
      tag_id: 8,
      name: "Mediterranean",
    },
    {
      tag_id: 9,
      name: "American",
    },
    {
      tag_id: 10,
      name: "French",
    },
    {
      tag_id: 11,
      name: "Greek",
    },
    {
      tag_id: 12,
      name: "Korean",
    },
    {
      tag_id: 13,
      name: "Spanish",
    },
    {
      tag_id: 14,
      name: "Vietnamese",
    },
    {
      tag_id: 15,
      name: "Cajun",
    },
    {
      tag_id: 16,
      name: "Middle Eastern",
    },
    {
      tag_id: 17,
      name: "Tex-Mex",
    },
    {
      tag_id: 18,
      name: "Caribbean",
    },
    {
      tag_id: 19,
      name: "Sushi",
    },
    {
      tag_id: 20,
      name: "Vegan",
    },
    {
      tag_id: 21,
      name: "Brazilian",
    },
    {
      tag_id: 22,
      name: "Russian",
    },
    {
      tag_id: 23,
      name: "African",
    },
    {
      tag_id: 24,
      name: "Irish",
    },
    {
      tag_id: 25,
      name: "Scandinavian",
    },
    {
      tag_id: 26,
      name: "Portuguese",
    },
    {
      tag_id: 27,
      name: "Lebanese",
    },
    {
      tag_id: 28,
      name: "Polish",
    },
    {
      tag_id: 29,
      name: "German",
    },
    {
      tag_id: 30,
      name: "Turkish",
    },
    {
      tag_id: 31,
      name: "Cuban",
    },
    {
      tag_id: 32,
      name: "Peruvian",
    },
    {
      tag_id: 33,
      name: "Argentinian",
    },
    {
      tag_id: 34,
      name: "Hawaiian",
    },
    {
      tag_id: 35,
      name: "Fusion",
    },
    {
      tag_id: 36,
      name: "Soul Food",
    },
    {
      tag_id: 37,
      name: "Jamaican",
    },
    {
      tag_id: 38,
      name: "British",
    },
    {
      tag_id: 39,
      name: "Moroccan",
    },
    {
      tag_id: 40,
      name: "Ethiopian",
    },
    {
      tag_id: 41,
      name: "Pescatarian",
    },
  ];
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
    // dispatch(something));
  }
  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={tags}
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
          />
        )}
      />
      <label className="label">Title </label>
      <input
        type="text"
        name="title"
        onChange={(e) => {
          const value = e.target.value;
          handleChange("title", value);
        }}
      />

      <label className="label">Description </label>
      <textarea
        type="text"
        name="description"
        onChange={(e) => {
          const value = e.target.value;
          handleChange("description", value);
        }}
      />

      <label className="label">Instructions</label>
      <textarea
        type="text"
        name="instructions"
        onChange={(e) => {
          const value = e.target.value;
          handleChange("instructions", value);
        }}
      />

      <label className="label">Prep Time</label>
      <input
        type="number"
        name="prep_time"
        onChange={(e) => handleChange("prep_time", e.target.value)}
      />

      <label className="label">Cook Time</label>
      <input
        type="number"
        name="cooking_time"
        onChange={(e) => {
          const value = e.target.value;
          handleChange("cooking_time", value);
        }}
      />

      <IngredientsForm
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      {displayErrors}
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}

export default RecipeForm;
