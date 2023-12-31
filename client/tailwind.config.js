/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        honey: "#85655a",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#85655a",

          secondary: "#75d1f0",

          accent: "#c07eec",

          neutral: "#302d12",

          "base-100": "#f5f5dc",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
      // "cyberpunk",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
