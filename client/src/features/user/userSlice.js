import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const response = await fetch("/users/profile");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle fetch errors here
    console.error("Error fetching user:", error);
    throw error;
  }
});

const initialState = {
  user: null,
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
      state.status = "idle";
      state.login = false;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = "idle";
      state.login = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
