/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#284B63",
        accent: "#3C6E71",

        lightBg: "#FFFFFF",
        lightText: "#353535",
        lightCard: "#D9D9D9",

        darkBg: "#111827",
        darkCard: "#1F2937",
        darkText: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
