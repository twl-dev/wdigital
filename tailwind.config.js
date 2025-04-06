/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./themes/**/layouts/**/*.{html,js}",
    "./content/**/*.{html,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 