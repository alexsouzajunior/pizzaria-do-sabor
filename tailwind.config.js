/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'staatliches': ['staatliches', 'serif'],
        'italianno': ['italianno', 'cursive'],
        'urbanist' : ['urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
}

