/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'show': '850px',
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-red-600",
    "bg-green-600",
    "bg-blue-600",
    "bg-yellow-600",
    "bg-purple-600",
  ],
}

