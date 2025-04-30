/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  theme: {
    extend: {
      colors: {
        primary: "#0077CC",  // Match your current primary color
        secondary: "#005fa3" // Match your current secondary color
      },
      fontFamily: {
        sans: ["Your current font", "sans-serif"]
      }
    }
  },
  plugins: []
} 