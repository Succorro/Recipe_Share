import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
  return fetch("/users/profile")
    .then((r) => r.json())
    .then((data) => data);
});

const initialState = {
  user: {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    bio: "",
    image: {
      name: "",
      record: { id: 1 },
    },
  },
  status: "idle",
  login: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.login = true;
    },
    logoutUser: (state) => {
      state.user = initialState.user;
      state.login = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = "idle";
    });
  },
});

// Action creators are generated for each case reducer function
// export const { userLoaded, userEdit } = userSlice.actions;
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
