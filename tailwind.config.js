/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary500':'#00D2E6',
        'secondary500':'#33A1EB'
      },
      fontFamily:{
        'tinne':['Tinne'],
        'sans':['poppins','sans-serif'],
      },
    },
  },
  plugins: [
      require('tailwind-scrollbar-hide')
  ],
}

