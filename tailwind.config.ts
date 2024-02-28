/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    colors: {
      white: "#F9FAFF",
      blue: {
        50: "#f2f6fc",
        100: "#e2ebf7",
        200: "#ccddf1",
        300: "#a8c7e8",
        400: "#7faadb",
        500: "#608dd1",
        600: "#4d74c3",
        700: "#4262b3",
        800: "#3b5192",
        900: "#344574",
        950: "#1b2237"
      },
      yellow: {
        50: "#fffdea",
        100: "#fff7c5",
        200: "#fff085",
        300: "#ffe246",
        400: "#ffd01b",
        500: "#ffb003",
        600: "#e28500",
        700: "#bb5d02",
        800: "#984708",
        900: "#7c3b0b",
        950: "#481d00"
      },
      grey: {
        50: "#f7f8f8",
        100: "#ededf1",
        200: "#d7d9e0",
        300: "#b5b8c4",
        400: "#8c92a4",
        500: "#6e7589",
        600: "#585d71",
        700: "#4a4e5e",
        800: "#3e414e",
        900: "#373a43",
        950: "#24252d"
      },
      destructive: "#ef4444",
      success: "#10b981"
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        blueWaves: "url('/background/blue-wave-bg.svg')",
        whiteWaves: "url('/background/white-wave-bg.svg')"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};