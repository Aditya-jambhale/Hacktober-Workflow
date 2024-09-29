/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'rotate-horizontal': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
       
      },
      animation: {
        'spin-horizontal': 'rotate-horizontal 6s linear infinite',
        'fade-out': 'fade-out 2s ease-out 4s 1', // runs after 4s delay
        'spin-and-fade': 'rotate-horizontal 2s linear 1, fade-out 2s ease-out 4s 1',
      },
    },
  },
  plugins: [  require('daisyui'),

  ],
}