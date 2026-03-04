/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          900: "#1e3a8a",
        },
        accent: "#a855f7",
      },
    },
  },
  plugins: [],
};
