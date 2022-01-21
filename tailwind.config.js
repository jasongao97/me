module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["InterVariable", "system-ui", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        DEFAULT: "64rem",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
