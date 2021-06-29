const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      blue: {
        background: "#202C37",
        text: "#111517",
        elements: "#2B3945"
      },
      gray: {
        background: "#FAFAFA",
        input: "#858585"
      },
      white: colors.white,
    },
    screens: {
      'mobile': '375px',
      'half': '768px',
      'small-laptop': '1024px',
      'laptop': '1600px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
