import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", () => {
  return fetch("/recipes")
    .then((r) => r.json())
    .then((data) => data);
});

const initialState = {
  recipes: [],
  status: "idle",
};

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    postRecipes: (state, action) => {
      state.recipes = state += action.payload;
    },
    deleteRecipes: (state, action) => {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
    updateRecipes: (state, action) => {
      state.recipes = state.recipes.find((recipe) => {
        recipe = action.payload;
        return recipe;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload;
      state.status = "idle";
    });
  },
});

// Action creators are generated for each case reducer function
export const { postRecipes, deleteRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
