import userReducer from "../features/user/userSlice";
import navigationReducer from "../features/navigationSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userReducer,
    login: navigationReducer,
  },
});

export default store;
