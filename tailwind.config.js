/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],



  theme: {
    extend: {
      animation: {
        rotateClockwise: "rotateClockwise 20s linear infinite", // Increased duration to 12 seconds for slower rotation
      },
      keyframes: {
        rotateClockwise: {
          "0%": { transform: "rotate(0deg)" }, // Start at 0 degree
          "100%": { transform: "rotate(360deg)" }, // Complete 360 degrees rotation clockwise
        },
      },
    },
  },
}

