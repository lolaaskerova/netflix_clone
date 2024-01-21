/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        custom: "18px",
        mini: "12px",
      },
      minHeight: {
        custom: "480px",
        big: "420px",
        mini: "350px",
      },
    },
  },
  plugins: [],
};
