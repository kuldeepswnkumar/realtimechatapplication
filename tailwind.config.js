/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poetsen: ["Poetsen One", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"]
      },
    },

  },
  plugins: [],
}

