/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#88c123',
        'secondary': '#77a823',
      },
      screens: {
        xsm: '450px',
        xxl: '1536px'
      },
    },
  },
  plugins: [],
}