import React from "react";

function About() {
  return (
    <div>
      <header>
        <h1>About Recipe Share</h1>
      </header>
      <main>
        <section>
          <h2>Our Purpose</h2>
          <p>
            Welcome to our application! Our goal is to provide you with a
            seamless and enjoyable experience while creating your favorite
            recipes to share. Whether you're here for information, tips, or a
            new meal, we're here to help you find what you need.
          </p>
        </section>
        <section>
          <h2>Repository</h2>
          <p>
            To look at the souce code feel free to check out{" "}
            <a
              href="https://github.com/Succorro/Recipe_Share"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/Succorro/Recipe_Share
            </a>
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            We value your feedback and questions. Feel free to reach out at{" "}
            <a href="mailto:stevengbmv@gmail.com">stevengbmv@gmail.com</a>.
          </p>
        </section>
      </main>
    </div>
  );
}

export default About;
