import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipeCard from "../RecipeCard";
import { Link } from "react-router-dom";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";

import { titleOptions } from "../allTagOptions";
import { discoverRecipes } from "../features/discover/discoverSlice";

function Recipes() {
  const dispatch = useDispatch();

  const discoverState = useSelector((state) => state.discover);
  const recipes = discoverState.recipes;
  const status = discoverState.status;
  const [category, setCategory] = useState("Italian");

  let categoryRecipes;
  let resultsDiv;

  useEffect(() => {
    dispatch(discoverRecipes(category));
  }, [category]);

  if (!recipes[0]) {
    categoryRecipes = (
      <div className="flex flex-col w-full">
        <h1 className="text-honey m-10">
          Unfortunately There Are No {category} Recipes
        </h1>
        <button className="">
          <Link to="/~recipes/new" className="btn btn-warning font-bold">
            Be the first to post {category} recipes!
          </Link>
        </button>
      </div>
    );
  } else {
    categoryRecipes = (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    );
  }

  // error handling for temporary unavailable recipes while loading
  if (status === "loading" || status === "failed") {
    resultsDiv = (
      <div className="mt-10 m-5">
        <Box sx={{ width: "100%", color: "burlywood" }}>
          <LinearProgress color="inherit" />
        </Box>
      </div>
    );
  } else {
    resultsDiv = (
      <div>
        <h2 className={categoryTitleStyle}>{category} Recipes</h2>
        {categoryRecipes}
        <hr style={{ width: "90%", marginLeft: "5%" }}></hr>
      </div>
    );
  }
  return (
    <div>
      <h1 className="flex items-center justify-center text-honey">
        Discover new Recipes
      </h1>{" "}
      <div className="m-2">
        <Autocomplete
          id="tags-standard"
          sx={{
            padding: "10px",
          }}
          options={titleOptions}
          getOptionLabel={(option) => {
            return option;
          }}
          onChange={(event, newValue) => {
            setCategory(newValue);
          }}
          value={category}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Choose a Category"
              placeholder="Categories"
              className={inputStyle}
            />
          )}
        />
      </div>
      {resultsDiv}
    </div>
  );
}

const inputStyle =
  "w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 text-honey";
const categoryTitleStyle = "ml-5 text-honey ";

export default Recipes;
