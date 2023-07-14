/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "575px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    colors: {
      primary: "#1B996A",
      secondary: "#BB6152",
      black: "#000000",
      white: "#fff",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      md: "1.125rem",
      xl: "1.375rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.125rem",
      "5xl": "3.5rem",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
    },
    extend: {
      padding: {
        section: "4rem",
      },
    },
  },
};
