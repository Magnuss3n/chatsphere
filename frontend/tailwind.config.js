/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom1: '26px 26px 52px #989898',
        custom2: '-26px -26px 52px #ffffff',
      },
      borderRadius: {
        '25px': '25px',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}