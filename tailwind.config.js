/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        morph: 'morph 6s ease-in-out infinite',
      },
      keyframes: {
        morph: {
          '0%, 100%': {
            borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%',
          },
          '50%': {
            borderRadius: '40% 60% 45% 55% / 55% 45% 50% 50%',
          },
        },
      },
    },
  },
  plugins: [],
}
