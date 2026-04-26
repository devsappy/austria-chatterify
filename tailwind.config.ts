import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#efece4",
        ink: {
          50: "#f4f2ea",
          100: "#e7e3d7",
          200: "#cfcabc",
          300: "#a8a295",
          400: "#7a7468",
          500: "#5a5548",
          600: "#403c33",
          700: "#2c2a25",
          800: "#1d1c18",
          900: "#0b0b09",
        },
        accent: {
          DEFAULT: "#b23a1f",
          50: "#f7ebe6",
          100: "#edd0c6",
          200: "#dba393",
          300: "#c67560",
          400: "#b95134",
          500: "#b23a1f",
          600: "#962d15",
          700: "#782414",
          800: "#5c1d13",
          900: "#441711",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      borderRadius: {
        none: "0px",
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
