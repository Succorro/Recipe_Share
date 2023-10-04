import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
  return fetch("/users/1")
    .then((r) => r.json())
    .then((data) => data);
});

const initialState = {
  user: {
    username: "User",
    email: "email",
    first_name: "first",
    last_name: "last",
    bio: "bio",
    image: {
      name: "nameofimage",
      record: { id: 1 },
    },
  },
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending](state) {
      state.status = "loading";
    },
    [fetchUser.fulfilled](state, action) {
      state.user = action.payload;
      state.status = "idle";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { userLoaded, userEdit } = userSlice.actions;

export default userSlice.reducer;
