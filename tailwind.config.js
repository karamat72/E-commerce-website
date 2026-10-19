/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172a25",
        ivory: "#f7f5f0",
        bronze: "#c28b58",
        muted: "#777b75"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 12px 40px rgba(23,42,37,.08)"
      }
    },
  },
  plugins: [],
};
