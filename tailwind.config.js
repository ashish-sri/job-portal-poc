/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#1597e4',
        'card':'#ffffff',
        'card-border':'#e6e6e6',
        'primary-dark':'#212121',
        'primary-white':'#fafafa',
        'primary-error':'#d86161',
        'primary-placeholder':'#7a7a7a'
      }
    },
  },
  plugins: [],
}

