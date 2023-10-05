import userReducer from "../features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipes/recipeSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    recipes: recipeReducer,
  },
});

export default store;
