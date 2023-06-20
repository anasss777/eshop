/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fancy': ['Dancing Script', 'sans-serif'],
        'mcLaren': ['McLaren', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'shadowing': '0 0 10px 0 rgba(0, 0, 0, 0.5)',
        'lightShadowing': '0 0 10px 0 rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}
