/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        ping: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        ping: {
          '75%, 100%': { transform: 'scale(1.5)', opacity: '0' },
        }
      },
      utilities: {
        '.animation-delay-300': {
          'animation-delay': '0.3s',
        },
      }
    },
  },
  plugins: [],
}

