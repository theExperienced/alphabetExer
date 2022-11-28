/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        singleBet: '1fr 1fr',
      },
      gridTemplateColumns: {
        betSlip: '1fr min-content',
      },
    },
  },
  plugins: [],
};
