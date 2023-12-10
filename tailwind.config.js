/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gold: '#D3AA55',
      darkblueee: '#1E2C3E',
      lightblack: '#222331',
      offwhite: '#FFFCFF',
      grey: '#3F4144'
    },
  },
  plugins: [],
}