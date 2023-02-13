/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090a',
      },
      fontFamily: {
        regular: 'Inter400',
        semibold: 'Inter600',
        bold: 'Inter700',
        extrabold: 'Inter800'
      }
    },
  },
  plugins: [],
}