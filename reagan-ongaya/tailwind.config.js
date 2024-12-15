/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path as per your project structure
  ],
  theme: {
    extend: {
      animation: {
        loader: 'loader 1s linear infinite',
      },
      keyframes: {
        loader: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
