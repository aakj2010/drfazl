/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary400: '#2b94ff',
        primary500: '#33578d',
        primary600: '#0055aa',
        primary700: '#003e7d',
        primary800: '#0c1f56',
        primary900: '#06102b',
        placeholder: '#647488',
        neutral100: '#e7eaee',
        neutral200: '#d0d5dd',
        neutral500: '#647288',
        neutral600: '#4b5768',
        bgwhite: '#ffffff',
        purpleprimary: '#4f1346',
        dark: '#13161a',
      },
    },
  },
  plugins: [],
}