import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../RecipeCard";
import { useSelector } from "react-redux";
function Home() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const recipe1 = recipes[0];
  const recipe2 = recipes[1];
  const recipe3 = recipes[3];

  const headerStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(245, 245, 220, 1), transparent ), url('/fullsizebackground.jpg')`,
  };
  return (
    <div>
      <div>
        <header
          className="relative bg-cover bg-center h-screen bg-image"
          style={headerStyle}
        >
          <div className="absolute top-0 left-0 w-full h-1/3 "></div>
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl font-bold mb-4 text-primary">Welcome</h1>
            <p className="text-xl text-primary">
              Share your favorite recipes with the world!
            </p>
          </div>
        </header>

        <section className="bg-amber-50 py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Trending Recipes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <RecipeCard recipe={recipe1} />
              <RecipeCard recipe={recipe2} />
              <RecipeCard recipe={recipe3} />
            </div>
          </div>
        </section>

        <section className="bg-beige py-8 text-center">
          <div className="container mx-auto">
            <p className="text-2xl font-bold mb-4">Ready to get cooking?</p>
            <Link to="/recipes" className="btn">
              Explore Recipes →
            </Link>
          </div>
        </section>
      </div>
      <section id="theme-reference">
        <div
          className="m-5 p-5"
          style={{ backgroundColor: "#f5f5dc", fontSize: "large" }}
        >
          <h2>Featured Cook:</h2>

          <h1 className="text-primary">Primary</h1>
          <h1 className="text-secondary">Secondary</h1>
          <h1 className="text-accent">Accent</h1>

          <h1 className="text-info">Info</h1>
          <h1 className="text-success">Success</h1>
          <h1 className="text-warning">Warning</h1>
          <h1 className="text-error">Error</h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
