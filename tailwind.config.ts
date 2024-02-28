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
      }
    },
    extend: {
      backgroundImage: {
        blueWaves: "url('/background/blue-wave-bg.svg')",
        whiteWaves: "url('/background/white-wave-bg.svg')",
        lineup: "url('/background/lineup-white-wave-bg.svg')",
        beforeArtistCard: "linear-gradient(to top, transparent 46%, rgba(12, 13, 19, 0.5) 68%, rgba(12, 13, 19) 97%)",
        afterArtistCard: "linear-gradient(to bottom, transparent 46%, rgba(12, 13, 19, 0.5) 68%, rgba(12, 13, 19) 97%)"
      },
      fontFamily: {
        montserrat: "Montserrat', sans-serif"
      },
      colors: {
        divider: "#4A4E5E",
        blueBackground: "#1C2235",
        yellowButton: "#FFB003",
        buttonText: "#1B2237",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};