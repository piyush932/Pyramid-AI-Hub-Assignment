/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        customBlack: '#2C2C2C',  // Example custom color code
        customWhite: '#FFFFFF', // Another custom color code
        customOrange: '#F97316',
        gray1:'#333333' // Another custom color code
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}