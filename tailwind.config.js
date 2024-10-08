/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        "3xl": "14px 17px 40px 4px",
        inset: "inset 0px 18px 22px",
        darkinset: "0px 4px 4px inset",
      },
      backgroundImage: {
        customBg: "linear-gradient(to bottom, #FFC46B, #FF9B05)",
      },
    },
    screens: {
      sm: "576px",
      "sm-max": { max: "576px" },
      md: "768px",
      "md-max": { max: "768px" },
      lg: "992px",
      "lg-max": { max: "992px" },
      xl: "1200px",
      "xl-max": { max: "1200px" },
      "2xl": "1320px",
      "2xl-max": { max: "1320px" },
      "3xl": "1600px",
      "3xl-max": { max: "1600px" },
      "4xl": "1850px",
      "4xl-max": { max: "1850px" },
    },
    colors: {
      white: "#ffffff",
      lightPrimary: "#F4F7FE",
      blueSecondary: "#4318FF",
      brandLinear: "#868CFF",
      gray: {
        50: "#F5F6FA",
        100: "#EEF0F6",
        200: "#DADEEC",
        300: "#C9D0E3",
        400: "#B0BBD5",
        500: "#B5BED9",
        600: "#A3AED0",
        700: "#707eae",
        800: "#2D396B",
        900: "#1B2559",
      },
      navy: {
        50: "#d0dcfb",
        100: "#aac0fe",
        200: "#a3b9f8",
        300: "#728fea",
        400: "#3652ba",
        500: "#1b3bbb",
        600: "#24388a",
        700: "#1B254B",
        800: "#111c44",
        900: "#0b1437",
      },
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#fbcf33",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2152ff",
        700: "#1d4ed8",
        800: "#344e86",
        900: "#00007d",
      },
      background: {
        100: "rgb(244 247 254)",
        900: "#070f2e",
      },
      brand: {
        500: "#422AFB",
      },
      shadow: {
        100: "var(--shadow-100)",
        500: "rgba(112, 144, 176, 0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
