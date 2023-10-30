import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    try {
      const response = await fetch("/recipes");

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  recipes: [],
  status: "idle",
  error: null, // Initialize the error field
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
      state.error = null; // Clear any previous errors on success
    });
    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message; // Store the error message
    });
  },
});

// Action creators are generated for each case reducer function
export const { postRecipes, deleteRecipes, patchRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
