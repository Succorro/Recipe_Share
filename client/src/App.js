import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import NewRecipe from "./pages/NewRecipe";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Navigation from "./Navigation";

import { useDispatch } from "react-redux";
import { fetchUser } from "./features/user/userSlice";
import RemoveProfile from "./pages/RemoveProfile";
import { fetchRecipes } from "./features/recipes/recipeSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Search from "./pages/Search";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Router>
      <Navigation />
      <div className="prose max-w-none">
        <Routes>
          <Route path="/~login" element={<Login />} />

          <Route path="/~users/profile/remove" element={<RemoveProfile />} />

          <Route path="/~users/profile" element={<Profile />} />

          <Route path="/~recipes/search" element={<Search />} />

          <Route path="/~recipes/new" element={<NewRecipe />} />

          <Route path="/~recipes/:id" element={<Recipe />} />

          <Route path="/~recipes" element={<Recipes />} />

          <Route path="/~about" element={<About />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
