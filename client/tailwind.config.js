module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:"#6c5f13",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
