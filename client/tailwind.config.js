module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        customText:"#696969",
        primary:"#3A3D34",
        secondary:"#181916",
        contactText:"#843939",
      },
      fontFamily: {
        body: ["Nunito, sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
