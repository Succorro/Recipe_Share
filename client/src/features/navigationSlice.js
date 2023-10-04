import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    clickLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { userLoaded, userEdit } = navigationSlice.actions;
export const { clickLogin, clickLogout } = navigationSlice.actions;
export default navigationSlice.reducer;
