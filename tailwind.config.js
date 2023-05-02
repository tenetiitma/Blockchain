/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['montserrat', 'sans-serif']
      },
    },
    fontWeight: {
      'extra-bold': '700'
    },
  },
  plugins: [],
}

