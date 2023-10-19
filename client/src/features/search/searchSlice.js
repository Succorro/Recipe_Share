import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchRecipes = createAsyncThunk(
  "search/searchRecipes",
  async (search) => {
    const params = new URLSearchParams();
    params.append("search", search);

    return fetch(`/recipes/search?${params}`)
      .then((r) => r.json())
      .then((data) => data);
  }
);

const initialState = {
  recipes: [],
  status: "idle",
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
      state.recipes = action.payload;
      state.status = "idle";
    });
    builder.addCase(searchRecipes.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default searchSlice.reducer;
