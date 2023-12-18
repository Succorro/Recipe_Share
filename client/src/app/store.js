import userReducer from "../features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipes/recipeSlice";
import searchReducer from "../features/search/searchSlice";
import discoverReducer from "../features/discover/discoverSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    recipes: recipeReducer,
    search: searchReducer,
    discover: discoverReducer,
  },
});

export default store;
