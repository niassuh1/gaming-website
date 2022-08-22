const { purple } = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        black: { DEFAULT: '#111315', 300: "#18181b", dark: "#000000" },
        primary: {
          '50': '#d6ffff',
          '100': '#d3ffed',
          '200': '#d2ffe5',
          '300': '#c8ffc5',
          '400': '#b9ff96',
          '500': '#a7ff68',
          '600': '#91f949',
          '700': '#77dd3d',
          '800': '#5ab742',
          '900': '#419643',
        }


      }
    },
  },
  plugins: [],
}


