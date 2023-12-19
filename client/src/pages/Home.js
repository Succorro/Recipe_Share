import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../RecipeCard";
import { useSelector } from "react-redux";

function Home() {
  // Redux store selector to grab recipe state
  const recipesState = useSelector((state) => state.recipes);
  const allRecipes = recipesState.recipes;
  let recipes;
  if (allRecipes.length >= 6) {
    recipes = allRecipes.slice(0, 5);
  } else if (allRecipes.length < 6) {
    const length = allRecipes.length;
    recipes = allRecipes.slice(0, length);
  }
  // const recipes = allRecipes.slice(0, 5);
  const status = recipesState.status;
  let displayRecipes;

  //ternary to handle false recipes state
  recipes
    ? (displayRecipes = recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      }))
    : (displayRecipes = (
        <h1 className="font-bold text-black"> Coming soon...</h1>
      ));

  // error handling for temporary unavailable recipes while loading
  if (status === "loading" || status === "failed") {
    displayRecipes = (
      <div className=" flex items-center justify-center">
        <h1 className="flex text-honey">Recipes are loading</h1>
        <span className="loading loading-dots loading-lg text-honey"> </span>
      </div>
    );
  }
  return (
    <div>
      <div>
        <header
          className="relative bg-cover bg-center h-screen bg-image"
          style={headerStyle}
        >
          <div className="absolute top-0 left-0 w-full h-1/3 "></div>
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl font-bold mb-4 text-honey">Welcome</h1>
            <p className="text-xl text-honey">
              Share your favorite recipes with the world!
            </p>
          </div>
        </header>

        <section className="bg-amber-50 py-12">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center text-honey">
              New Recipes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {displayRecipes}
            </div>
          </div>
        </section>

        <section className="bg-beige py-8 text-center">
          <div className="container mx-auto">
            <p className="text-2xl text-gray-500 font-bold mb-4">
              Ready to get cooking?
            </p>
            <Link to="/~recipes" className="btn">
              Explore Recipes →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
const headerStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(245, 245, 220, 1), transparent ), url('/fullsizebackground.jpg')`,
};

export default Home;
