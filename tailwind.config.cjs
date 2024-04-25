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
          DEFAULT: '#4FA2FF',
          '50': '#ECF6FF',
          '100': '#D9ECFF',
          '200': '#B9DAFF',
          '300': '#95C7FF',
          '400': '#72B5FF',
          '500': '#4FA2FF',
          '600': '#1A86FF',
          '700': '#0050B9',
          '800': '#003B84',
          '900': '#002351'
        },
        // 'primary': {
        //   DEFAULT: '#17CF97',
        //   50: '#A8F5DE',
        //   100: '#96F3D7',
        //   200: '#71EFC9',
        //   300: '#4CEBBB',
        //   400: '#28E7AD',
        //   500: '#17CF97',
        //   600: '#119D72',
        //   700: '#0C6A4D',
        //   800: '#063829',
        //   900: '#010504',
        //   950: '#000000'
        // },
        gray: colors.neutral,
        'beige': {
          DEFAULT: '#F7F5F0',
          '100': '#E6E0D2',
          '200': '#B3A380'
        },
        darkGreen: "#0B2421",
        mintGreen: "#C5E0BF",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
