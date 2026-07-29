/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['manrope', 'sans-serif'],
        'staatliches': ['staatliches', 'serif'],
        'italianno': ['italianno', 'cursive'],
        'urbanist' : ['urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
}

