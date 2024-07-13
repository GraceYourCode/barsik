/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#181F2D",
        "darker-blue": "#181F2D",
        "darkest-blue": "#111419",
        blue: "#1C272C",
        gray: "#858F9E",
        teal: "#2AECD5",
        green: "#2AEC8F",
        black: "#090B0E",
        "light-blue": "#00AFE5",
        "dark-gray": "#535353",
      },
      fontFamily: {
        nanum: ['"Nanum Pen Script"'],
        montserrat: ['"Montserrat"'],
      },
    },
  },
  plugins: [],
};
