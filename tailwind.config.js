/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./public/**/*.{html,js}"],
  },
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#122046",
        dark: "#000000",
        secondary: "#64748b",
        tri: "#EAFDFC",
        four: "#F0FCFF",
        igor: "#f4b4cc",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("taos/plugin")],
};
