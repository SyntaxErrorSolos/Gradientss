/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
    content: ["*"],
  theme: {

    extend: {
      fontFamily: {
        Changa: "'Changa One'",
        Merriweather: "'Merriweather'",
        Poppins: "'Poppins'"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "kindaBlack": "#272525",
        "Cyanv2": "#9FF5E9",
        "gradient1": "#2e36b3",
        "light": "#757bd8",
        "1": "#FF5F6D",
        "2": "#FFC371"
      },
    },
  },
  plugins: [],
}
