/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#4f3cc9",
        "primary-dark": "#4232aa",
        secondary: "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
