import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
function RecipeForm() {
  const [recipeTags, setRecipeTags] = useState([]);
  const [recipe, setRecipe] = useState({});
  //   console.log(recipe);
  //   console.log(recipeTags);

  const tags = [
    {
      id: 1,
      name: "Mexican",
    },
    {
      id: 2,
      name: "Italian",
    },
    {
      id: 3,
      name: "Vegetarian",
    },
    {
      id: 4,
      name: "Chinese",
    },
    {
      id: 5,
      name: "Indian",
    },
    {
      id: 6,
      name: "Japanese",
    },
    {
      id: 7,
      name: "Thai",
    },
    {
      id: 8,
      name: "Mediterranean",
    },
    {
      id: 9,
      name: "American",
    },
    {
      id: 10,
      name: "French",
    },
    {
      id: 11,
      name: "Greek",
    },
    {
      id: 12,
      name: "Korean",
    },
    {
      id: 13,
      name: "Spanish",
    },
    {
      id: 14,
      name: "Vietnamese",
    },
    {
      id: 15,
      name: "Cajun",
    },
    {
      id: 16,
      name: "Middle Eastern",
    },
    {
      id: 17,
      name: "Tex-Mex",
    },
    {
      id: 18,
      name: "Caribbean",
    },
    {
      id: 19,
      name: "Sushi",
    },
    {
      id: 20,
      name: "Vegan",
    },
    {
      id: 21,
      name: "Brazilian",
    },
    {
      id: 22,
      name: "Russian",
    },
    {
      id: 23,
      name: "African",
    },
    {
      id: 24,
      name: "Irish",
    },
    {
      id: 25,
      name: "Scandinavian",
    },
    {
      id: 26,
      name: "Portuguese",
    },
    {
      id: 27,
      name: "Lebanese",
    },
    {
      id: 28,
      name: "Polish",
    },
    {
      id: 29,
      name: "German",
    },
    {
      id: 30,
      name: "Turkish",
    },
    {
      id: 31,
      name: "Cuban",
    },
    {
      id: 32,
      name: "Peruvian",
    },
    {
      id: 33,
      name: "Argentinian",
    },
    {
      id: 34,
      name: "Hawaiian",
    },
    {
      id: 35,
      name: "Fusion",
    },
    {
      id: 36,
      name: "Soul Food",
    },
    {
      id: 37,
      name: "Jamaican",
    },
    {
      id: 38,
      name: "British",
    },
    {
      id: 39,
      name: "Moroccan",
    },
    {
      id: 40,
      name: "Ethiopian",
    },
    {
      id: 41,
      name: "Pescatarian",
    },
  ];
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const newRecipe = { ...recipe, [name]: value, tags: recipeTags };
    setRecipe(newRecipe);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(recipe);
  }
  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={tags}
        getOptionLabel={(option) => option.name}
        onChange={(event, newValue) => {
          setRecipeTags(newValue);
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
      <label className="label">
        Title
        <input type="text" name="title" onChange={(e) => handleChange(e)} />
      </label>
      <label className="label">
        Description
        <textarea
          type="text"
          name="description"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="label">
        Instructions
        <textarea
          type="text"
          name="instructions"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="label">
        Prep Time
        <input
          type="number"
          name="prep_time"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="label">
        Cook Time
        <input
          type="number"
          name="cooking_time"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="label">
        Ingredients
        <input
          type="text"
          name="ingredients"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}

export default RecipeForm;
