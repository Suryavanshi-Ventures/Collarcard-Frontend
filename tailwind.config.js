/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "390px",
        md: "768px",
        lg: "1024px",
        xl: "1120px",
      },
    },
  },
  plugins: [],
};
