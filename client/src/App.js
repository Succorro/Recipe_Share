// import { useState, useEffect } from "react";
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

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <BrowserRouter>
      <div class="prose">
        <Navigation />
        <Switch>
          <Route path="/login">
            <Login />
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
