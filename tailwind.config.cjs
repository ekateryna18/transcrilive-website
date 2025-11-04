const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#0B1120',
        bgr: '#1C1C27',
        lightblue: '#D2E4FF',
        mediumblue: '#88B6FB',
        whitetxt: '#D9D9D9',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.heading-style': {
          '@apply text-7xl font-poppins font-medium bg-gradient-to-r from-lightblue to-mediumblue bg-clip-text text-transparent': {},
        },
      })
    }),
  ],
}