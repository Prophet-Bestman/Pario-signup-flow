/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2994A",
        "gray-text": "#BDBDBD",
        "gray-text2": "#4E598C",
      },
    },
  },
  plugins: [],
};
