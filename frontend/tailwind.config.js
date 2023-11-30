/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-1": "#B3B3B3",
        "grey-2": "#8B8B8B",
        "grey-3": "#7F8885",
        "grey-4": "#798481",
        greenish: "#269272",
        whitegrey: "#FFFFFF3B",
        gradient: "linear-gradient(117deg, #269272 12.58%, #174A4E 97.55%)",
      },
    },
  },
  plugins: [],
};
