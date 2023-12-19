import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchRecipes = createAsyncThunk(
  "search/searchRecipes",
  async ({ search, offset }) => {
    try {
      const params = new URLSearchParams();
      params.append("search", search);
      params.append("offset", offset);

      const response = await fetch(`/recipes/search?${params}`);
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
  offset: 0,
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchRecipes.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(searchRecipes.fulfilled, (state, action) => {
      const { data, offset } = action.payload;
      state.search = action.meta.arg.search;
      state.offset = offset;
      state.recipes = data;
      state.status = "idle";
    });
    builder.addCase(searchRecipes.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { incrementOffset } = searchSlice.actions;
export default searchSlice.reducer;
