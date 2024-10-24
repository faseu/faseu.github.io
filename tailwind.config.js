/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        accent: '#d59b6a',
        neutral: '#826a5c',
        secondary: '#000',
        tertiary: '#151035',
        'base-200': '#dbdbdb',
        'light-bg': '#f1f1f1',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('')",
      },
    },
  },
  plugins: [],
};
