module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#06b6d4',
        secondary: {
          100: '#9333ea',
          200: '#2563eb'
        }
          
      },
      fontSize: {
        pro: '10rem'
      }
    },
  },
  plugins: [],
}
