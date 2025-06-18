/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        blue: '#3B3DBF',
        lightBlue: '#6567DD',
        green: '#00B94A',
        white: '#FFFFFF',
        red: '#EF463A',
        black: '#171717',
        lightBg: '#F0F4FF',
      },
    },
  },
  plugins: [],
};
