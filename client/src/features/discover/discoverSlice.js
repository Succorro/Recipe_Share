import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const discoverRecipes = createAsyncThunk(
  "discover/discoverRecipes",
  async ({ discover, offset }) => {
    try {
      const params = new URLSearchParams();
      params.append("discover", discover);
      params.append("offset", offset);

      const response = await fetch(`/recipes/discover?${params}`);
      const data = await response.json();

      return { data, offset };
    } catch (error) {
      console.error("Error fetching recipes:", error);
      throw error;
    }
  }
);

const initialState = {
  recipes: [],
  status: "idle",
  category: "Italian",
  offset: 0,
};

export const discoverSlice = createSlice({
  name: "discover",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(discoverRecipes.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(discoverRecipes.fulfilled, (state, action) => {
      console.log(action);
      const { data, offset } = action.payload;
      state.recipes = data;
      state.offset = offset;
      state.category = action.meta.arg.category;
      state.status = "idle";
    });
    builder.addCase(discoverRecipes.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default discoverSlice.reducer;
