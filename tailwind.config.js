/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      snapType: {
        y: 'scroll-snap-type-y',
      },
      snapAlignment: {
        mandatory: 'scroll-snap-align',
      },
    },
  },
  plugins: [],
}
