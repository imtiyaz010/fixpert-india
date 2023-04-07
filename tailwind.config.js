/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "475px",
      "3xl": "1850px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
