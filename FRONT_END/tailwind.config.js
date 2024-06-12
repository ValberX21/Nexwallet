const colors = require('tailwindcss/colors');
const presetQuick = require('franken-ui/shadcn-ui/preset-quick');

module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // ou 'media' ou true
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], 
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        darkBackground: '#171717',
        text: {
          base: '#737373',
          light: '#A6A6A6',
          lighter: '#D9D9D9',
          superLight: '#F0F0F0',
          ultraLight: '#FFFFFF',
        },
        borders: {
          base: '#404040',
          light: '#595959',
          lighter: '#8C8C8C',
        },
        cards: {
          base: '#1E1E1E',
          hover: '#333333',
          selected: '#4D4D4D',
        },
        icons: '#f97316',
        buttons: {
          base: '#f97316',
          hover: '#ea580c',
          active: '#c2410c',
        },
      },
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
