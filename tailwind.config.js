/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-primary': '#0F2137',
        'text-secondary': '#343D48',
        primary: '#E5A740',
        secondary: '#fff0d7',
        'bg-special': '#FFFCF7',
        'bg-primary': '#2b293e',
        'bg-secondary': '#353448',
      },
      fontFamily: {
        'DM Sans': ['DM Sans', 'sans-serif'],
      },
      fontOpticalSizing: ['auto'],
      fontWeight: {
        thin: 100,
        'extra-light': 200,
        light: 300,
        normal: 400,
        medium: 500,
        'semi-bold': 600,
        bold: 700,
        'extra-bold': 800,
        black: 900,
      },
      fontStyle: {
        italic: 'italic',
        normal: 'normal',
        oblique: 'oblique',
      },
      screens: {
        xxs: '280px',
        mini: '320px',
        break_custom: '390px',
        break_custom2: '542px',
      },
    },
  },
  plugins: [daisyui],
};
