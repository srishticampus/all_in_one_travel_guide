

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",

  ],
  theme: {
    extend: {
      spacing: {
        '128':  '32rem',
        '500': '125rem',
      },
      colors: {
        blueShade: "#1c2434",
        grayDark: "#333a48",
        dashboardBlue: "#f1f5f9"
      }        

    },
  },
  plugins: [],
}
