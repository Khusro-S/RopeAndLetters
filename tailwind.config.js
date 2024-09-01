/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greyBg: "rgba(255,255,255,0.87)",
      },
      keyframes: {
        popup: {
          "0%": {
            scale: 0,
          },
          "100%": {
            scale: 1,
          },
        },
      },

      animation: {
        popup: "popup linear 0.4s",
      },
    },
  },
  plugins: [],
};
