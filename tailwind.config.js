/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'inner-blue-custom': 'inset 0 0 10px rgba(34, 113, 209, 1)',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.webp')",
      },
    },
  },
  plugins: [],
};
