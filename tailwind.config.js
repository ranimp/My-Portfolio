/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/bg-real.svg')",
      },
      fontFamily: {
        'montserrat-bold': ['Montserrat-Bold'],
        'montserrat-medium': ['Montserrat-Medium'],
      },
      height: {
        jumbotron: '36rem',
      },
      colors: {
        'pink-100': '#FFE1E1',
        'pink-200': '#FF9D9D',
        'pink-300': '#FF8B8B',
        'purple-200': '#CA69F8',
        'black-100': '#4A4A4A',
      },
    },
  },
  plugins: [],
};
