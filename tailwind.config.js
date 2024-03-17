/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0BE58A",
        txt: "150B2B",
        "nav-txt": "#150B2B70",
        txt3: "#282828",
        txt3a: "#282828B3",
        txt3b: "#282828CC",
        txt4: "#878787",
        bg1: "#150b2b0d",
        bg2: "#28282805",
        'rgba-150B2BE6': '#150B2BE6',
        'rgba-150B2B00': '#150B2B00',
    },
  },
  plugins: [],
}
}