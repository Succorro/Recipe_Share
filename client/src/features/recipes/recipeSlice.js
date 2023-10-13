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
      state.recipes.push(action.payload);
    },
    deleteRecipes: (state, action) => {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
    patchRecipes: (state, action) => {
      const { id, ...updatedRecipe } = action.payload;
      const recipeIndex = state.recipes.findIndex((recipe) => recipe.id === id);
      if (recipeIndex !== -1) {
        state.recipes[recipeIndex] = {
          ...state.recipes[recipeIndex],
          ...updatedRecipe,
        };
      }
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
    builder.addCase(fetchRecipes.rejected, (state) => {
      state.status = "failed";
    });
  },
});

// Action creators are generated for each case reducer function
export const { postRecipes, deleteRecipes, patchRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
