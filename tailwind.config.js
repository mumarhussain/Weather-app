/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gradientColorStops: {
        'purple-white': ['#680b85', '#fff'],
      },
    },
  },
  plugins: [],
}

