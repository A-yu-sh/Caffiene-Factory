/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          800: "#3C2A21",
        },
        secondary: {
          800: "#17100D",
        },
        starPri: {
          100: "#D9D3D0",
          800: "#C8A066",
        },
        backgrnd: {
          100: "#FFFCFA",
        },
      },
      fontFamily: {
        Nunito: "Nunito",
      },
    },
  },
  plugins: [],
};
