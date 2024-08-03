/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'phantom-storm': ['"Phantom Storm"', 'sans-serif'],
      },
      screens: {
        lg: '1050px', 
      },
    },
  },
  plugins: [],
}
