// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust as necessary
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 10s linear infinite", // Adjust the duration to your liking
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeb: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
