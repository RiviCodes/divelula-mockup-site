/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#3164ad",
        customBlueHover: "#4c82cd",
        customLime: "#ADCC00",
        customLimeHover: "#c3e600",
      },
    },
  },
  plugins: [],
};
