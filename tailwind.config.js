/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#252422',
        textAndImagesColor: '#403d39',
        buttonBg: '#eb5e28',
        offWhite: '#fffcf2',
        lightGray: '#ccc5b9'
      }
    },
  },
  plugins: [],
}