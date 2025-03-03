/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'plus': ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }, // Typing completed
        },
      },
      animation: {
        typewriter: 'typewriter 4s steps(40) infinite', // Loop the typing effect
      },
      screens: {
        // Custom screen sizes for finer control over breakpoints
        'xs': '475px', // Extra small devices
        'sm': '640px', // Small devices
        'md': '768px', // Medium devices
        'lg': '1024px', // Large devices
        'xl': '1280px', // Extra large devices
        '2xl': '1536px', // 2X extra large devices
      }
    },
  },
  plugins: [],
}
