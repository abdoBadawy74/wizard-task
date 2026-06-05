import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0F1A",
        secondary: "#D0BCFF",
        card: {
          DEFAULT: "#111827",
          hover: "#1F2937",
        },
        border: {
          subtle: "#1F2937",
        },
        accent: {
          amber: "#FFB95F",
          lavender: '#D0BCFF',
          peach: '#FFB95F',
          purple: "#7C3AED",
          green: "#10B981",
          orange: "#FFB4AB",
        },
        text: {
          primary: "#D4E4FA",
          secondary: "#CBC3D7",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
