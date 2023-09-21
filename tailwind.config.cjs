/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': {
          DEFAULT: '#17CF97',
          50: '#A8F5DE',
          100: '#96F3D7',
          200: '#71EFC9',
          300: '#4CEBBB',
          400: '#28E7AD',
          500: '#17CF97',
          600: '#119D72',
          700: '#0C6A4D',
          800: '#063829',
          900: '#010504',
          950: '#000000'
        },
        gray: colors.neutral,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
