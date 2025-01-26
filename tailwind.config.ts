/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'love-pink': {
          500: '#FF69B4',
          600: '#FF1493'
        }
      }
    }
  },
  plugins: []
}
