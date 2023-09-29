import React from "react";

function Home() {
  return (
    <body class="prose prose-lg">
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
          class="m-5 p-5"
          style={{ backgroundColor: "#f5f5dc", fontSize: "large" }}
        >
          <h2>Featured Cook:</h2>
          <h1 class="text-primary">Primary</h1>
          <h1 class="text-secondary">Secondary</h1>
          <h1 class="text-accent">Accent</h1>

          <h1 class="text-info">Info</h1>
          <h1 class="text-success">Success</h1>
          <h1 class="text-warning">Warning</h1>
          <h1 class="text-error">Error</h1>
        </div>
      </section>
    </body>
  );
}

export default Home;
