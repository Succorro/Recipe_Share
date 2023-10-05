import React from "react";

function Home() {
  return (
    <div className="prose prose-lg">
      <section id="welcome">
        <div>
          <h1>Welcome</h1>
          <p>Intro message</p>
        </div>
        <div>image of food</div>
      </section>
      <section id="trending">
        <div>
          <h1>Treding Recipes</h1>
          <div>Recipe1</div>
          <div>Recipe2</div>
          <div>Recipe3</div>
        </div>
      </section>
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
