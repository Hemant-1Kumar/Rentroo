/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        solid: "var(--color-solid)",
        primaryOne: "var(--color-primaryOne)",
        primaryTwo: "var(--color-primaryTwo)",
        textColor: "var(--color-textColor)",
        blackCustom: "var(--color-black)",
      },
    },
  },
  plugins: [],
}