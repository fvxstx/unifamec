import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#001784",
          light: "#16224A",
          deep: "#0A1330",
        },
        coral: {
          DEFAULT: "#E63946",
          dark: "#C9273A",
        },
        offwhite: "#F5F6FA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
      backgroundImage: {
        gradiente: "url('/images/bg-gradiente.jpg')",
        pattern: "url('/images/bg-pattern.jpg')",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
