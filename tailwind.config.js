/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url('/src/assets/bgIMG.png')",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      objectPosition: {
        fit: "cover",
      },
      colors: {
        primary: "#edf2f8",
        secondary: "#313bac",
        black: "#030303",
        lightGray: "#e4e4e4",
        gray: "#6b7688",
        brown: "#46364a",
        white: "#ffffff",
      },
      fontFamily: {
        fontBase: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0 0 20px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        head: "2.75rem;",
        p: "0.8rem",
        bold: "1rem",
      },
    },
  },
  plugins: [],
};
