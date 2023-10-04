import userReducer from "../features/user/userSlice";
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
