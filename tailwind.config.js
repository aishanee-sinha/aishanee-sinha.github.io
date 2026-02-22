/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0055A2",    // SJSU Blue for main background
        secondary: "#D3AF37",  // Gold for tiles
        accent: "#E5A823",     // Original gold for text
        tertiary: "#006AC8",   // Lighter blue for cards
        lightText: "#ffffff",  // White text
        darkText: "#CBD5E1",   // Light gray text for better contrast
      },
    },
  },
  plugins: [],
} 