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
  plugins: [],
}