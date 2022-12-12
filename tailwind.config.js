/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": {
          dark: "#232931",
          medium: "#393E46",
          primary: "393E46",
          light: "#EEEEEE",
        },
        "mirage":{
          initial: "#141E30",
          final: "#243B55"
        }
      },
    },
  },
  plugins: [],
}
