import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import NewRecipe from "./pages/NewRecipe";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Navigation from "./Navigation";

import { useDispatch } from "react-redux";
import { fetchUser } from "./features/user/userSlice";
import RemoveProfile from "./pages/RemoveProfile";
import { fetchRecipes } from "./features/recipes/recipeSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchRecipes());
  }, [dispatch]);

  const recipes = useSelector((state) => state.recipes.recipes);
  if (recipes.length === 0)
    return <span className="loading loading-spinner loading-lg"></span>;

  return (
    <BrowserRouter>
      <div className="prose">
        <Navigation />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/users/profile/remove">
            <RemoveProfile />
          </Route>
          <Route path="/users/profile">
            <Profile />
          </Route>
          <Route path="/users/:id">
            <User />
          </Route>
          <Route path="/recipes/new">
            <NewRecipe />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
