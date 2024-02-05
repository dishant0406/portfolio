/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
