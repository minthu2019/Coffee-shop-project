/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        some_key: '1.5rem',
      },
    },
  },
  plugins: [require("daisyui")],
}
