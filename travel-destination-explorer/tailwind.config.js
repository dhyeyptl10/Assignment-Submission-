/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        travel: {
          dark: "#0b0f19",
          card: "#111827",
          border: "#1f2937",
          teal: "#0d9488",
          emerald: "#10b981",
          gold: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
};
