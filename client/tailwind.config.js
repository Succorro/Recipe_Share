/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fbcfe8",

          secondary: "#a7f3d0",

          accent: "#d8b4fe",

          neutral: "#111827",

          "base-100": "#f3f4f6",

          info: "#93c5fd",

          success: "#bef264",

          warning: "#fde047",

          error: "#fb7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
