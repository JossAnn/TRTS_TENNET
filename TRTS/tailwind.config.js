/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {},
    textColor: {
      'custom-white': '#FFF2E6',
      'black': '#000000',
    },
    backgroundColor: {
      'custom': '#8A7460',
    },
  },
  variants: {},
  plugins: [],
}
