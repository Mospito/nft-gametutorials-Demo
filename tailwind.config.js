const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      'sans': [ 'Prompt', 'sans-serif']
    },
    backgroundColor: theme => ({
      'lightblue': '#0369A1',
      'blue': '#0EA5E9',
      'blue2' : '#99ccff',
      'whiteblue' : '#c2e9fb',
      'sunglow' : '#f8de7e',
      'sunglow2' : '#F9E79F',
      'palepink' : '#ffb7c5',
      'purple' : '#b19cd9',
      'red' : '#da8a67',
      'red2' : '#F5B7B1',
      'red3' : '#FADBD8 ',
      'green' : '#229954',
      'babygreen' : '#A9DFBF',
      'darkred' : '#C0392B',
      'babyred' : '#F5B7B1',
      'bluesea' : '#8DC6BF',
      'egg' : '#8dc6bf80',
      'white' : ' #FFFFFF',
      'redcony' : '#FDD6AB',
     }),
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
