/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'sans-serif']
    },
    colors: {
      primary: '#C429D9',
      secondary: '#04B2D9',
      
    },
    extend: {},
  },
  plugins: [],
}

