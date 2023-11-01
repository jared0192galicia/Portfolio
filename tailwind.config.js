/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/*.tsx', './components/home/**'],
  theme: {
    extend: {},
  },
  purge: [
    './src/**/*.html',
    './components/home/*.tsx',
    './src/**/*.tsx',
  ],

  plugins: [],
}

