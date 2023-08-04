/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: (theme) => ({
        // To center containers by default
        center: true,

        // To add horizontal padding by default
        padding: theme("spacing.4"),
      }),
    },
    colors: {
      dark: "#000000",
      primary: "#e7e7e7",
      primaryDark: "#878787",
      secondary: "#262626",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
