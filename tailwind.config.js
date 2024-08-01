/* eslint-disable no-undef */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "about-pattern": "url('./src/assets/BlobSVG.svg)",
      },
      fill: {
        "white-500": "#ffffff",
      },
      blur: {
        ma: "6px",
      },
      inset: {
        "40p": "40%",
        "70p": "70%",
      },
      fontFamily: {
        Technor: ["Technor"],
        Supreme: ["Supreme"],
      },
      screens: {
        touch: { raw: "(hover: none) and (pointer: coarse)" },
        lg: "1025px",
      },
      colors: {
        whiteMode: {
          bg: "#d1d5db",
          text: "#121212",
          slideBg: "F1f1f1",
        },
        darkMode: {
          bg: "#121212",
          text: "#d1d5db",
          slideBg: "gray",
        },
        accentColors: {
          lila: "#836FFF",
          green: "#15F5BA",
        },
        slideBg: "#1F1F1F",
      },
    },
  },
  plugins: [require("daisyui")],
};
