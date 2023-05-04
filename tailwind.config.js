/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          1: "hsl(var(--purple-1) / <alpha-value>)",
          2: "hsl(var(--purple-2) / <alpha-value>)",
        },
        red: {
          1: "hsl(var(--red-1) / <alpha-value>)",
          2: "hsl(var(--red-2) / <alpha-value>)",
        },
        dark: {
          1: "hsl(var(--dark-1) / <alpha-value>)",
          2: "hsl(var(--dark-2) / <alpha-value>)",
          3: "hsl(var(--dark-3) / <alpha-value>)",
          4: "hsl(var(--dark-4) / <alpha-value>)",
        },
        light: {
          1: "hsl(var(--light-1) / <alpha-value>)",
          2: "hsl(var(--light-2) / <alpha-value>)",
          3: "hsl(var(--light-3) / <alpha-value>)",
          4: "hsl(var(--light-4) / <alpha-value>)",
        },
        shadow: "hsl(var(--shadow) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
