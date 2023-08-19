/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#88c123',
      'secondary': '#7e5bef',
    },
    screens: {
      xsm: '450px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px'
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}