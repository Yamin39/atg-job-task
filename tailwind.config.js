/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex-sans": `"IBM Plex Sans", serif`,
      },
      screens: {
        "2md": "920px",
      },
    },
  },
  plugins: [],
};
