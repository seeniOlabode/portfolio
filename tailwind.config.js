/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "port-orange": "#FF6A45",
        "port-black": "#070724",
        "port-grey": "#DEDEDE",
        "port-lines-dark": "#393950",
      },
    },
  },
  plugins: [],
};
