/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'navy-acc': '#051020',
        'gold': '#C5A059',
        'bg-1': '#FFFFFF',
        'bg-2': '#F8FAFC',
        'ink-2': '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        boutique: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'slow-pan': 'pan 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pan: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
