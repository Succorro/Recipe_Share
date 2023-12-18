import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const discoverRecipes = createAsyncThunk(
  "discover/discoverRecipes",
  async (discover) => {
    const discoverValue = discover || "Italian";
    const params = new URLSearchParams();
    params.append("discover", discoverValue);

    return fetch(`/recipes/discover?${params}`)
      .then((r) => r.json())
      .then((data) => data);
  }
);

const initialState = {
  category: "Italian",
  recipes: [],
  status: "idle",
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
      state.recipes = action.payload;
      state.status = "idle";
    });
    builder.addCase(discoverRecipes.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default discoverSlice.reducer;
