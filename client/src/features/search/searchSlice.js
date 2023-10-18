import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchRecipes = createAsyncThunk(
  "search/searchRecipes",
  (search) => {
    return fetch(`/search?${search}`)
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
