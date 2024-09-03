/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "delay-100ms",
    "delay-200ms",
    "delay-300ms",
    "delay-400ms",
    "delay-500ms",
    "delay-600ms",
  ],
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
        popdown: {
          "0%": {
            scale: 1,
          },
          "100%": {
            scale: 0,
          },
        },
      },

      animation: {
        popup: "popup linear 0.4s",
        popdown: "popdown 0.5s forwards",
      },

      animationDelay: {
        "1ms": "100ms",
        "2ms": "200ms",
        "3ms": "300ms",
        "4ms": "400ms",
        "5ms": "500ms",
        "6ms": "600ms",
        "1300ms": "1300ms",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".delay-100ms": {
          "animation-delay": "100ms",
        },
        ".delay-200ms": {
          "animation-delay": "200ms",
        },
        ".delay-300ms": {
          "animation-delay": "300ms",
        },
        ".delay-400ms": {
          "animation-delay": "400ms",
        },
        ".delay-500ms": {
          "animation-delay": "500ms",
        },
        ".delay-600ms": {
          "animation-delay": "600ms",
        },
        ".delay-1300ms": {
          "animation-delay": "1300ms",
        },
      });
    },
  ],
};
