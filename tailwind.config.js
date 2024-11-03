/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        "surface-alpha": "hsl(var(--gray-10-hsl) / 65%)",
      },
    },
  },
  plugins: [],
}
