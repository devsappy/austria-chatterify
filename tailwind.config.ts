import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#ffffff",
        ink: {
          50: "#f5f5f5",
          100: "#e5e5e5",
          200: "#c4c4c4",
          300: "#404040",
          400: "#262626",
          500: "#1a1a1a",
          600: "#141414",
          700: "#0d0d0d",
          800: "#060606",
          900: "#000000",
        },
        accent: {
          DEFAULT: "#4a70a9",
          50: "#eef3f8",
          100: "#dce6f0",
          200: "#b5c8e0",
          300: "#8fabd4",
          400: "#6c8dbe",
          500: "#4a70a9",
          600: "#3d5e91",
          700: "#314d78",
          800: "#25395c",
          900: "#1a2840",
        },
      },
      fontFamily: {
        sans: ["var(--font-raleway)", "system-ui", "sans-serif"],
        display: ["var(--font-raleway)", "Georgia", "serif"],
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
