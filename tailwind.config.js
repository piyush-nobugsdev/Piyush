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
        // 4 Color Palette
        darkBg: "#181823",      // Deep maroon/dark background
        accent: "#E74C3C",      // Bright red/coral accent
        lightBg: "#C0EEF2",     // Light cyan (secondary accent)
        lightText: "#E9F8F9",   // Off-white text
        
        // Additional utilities
        mutedText: "#A0A0A0",   // For secondary text
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #181823 0%, #2a1f2e 100%)',
      },
    },
  },
  plugins: [],
};