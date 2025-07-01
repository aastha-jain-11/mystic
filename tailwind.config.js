/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f6f0',
          100: '#e6ebd9',
          200: '#d0d9b8',
          300: '#b4c48f',
          400: '#9db070',
          500: '#84965d', // Main olive green
          600: '#6a7a48',
          700: '#55623b',
          800: '#465133',
          900: '#3c452d',
        },
        secondary: {
          50: '#faf9f7',
          100: '#f3f0eb',
          200: '#e8e1d6',
          300: '#d9cdb8',
          400: '#c8b599',
          500: '#b59d7a', // Main cream/beige
          600: '#a68965',
          700: '#8b7155',
          800: '#725e4a',
          900: '#5e4e3e',
        },
        accent: {
          50: '#f9f7fc',
          100: '#f1ebf7',
          200: '#e6dbf0',
          300: '#d2bfe3',
          400: '#b99bd1', // Main lilac
          500: '#a076bc',
          600: '#8a5ca5',
          700: '#744b8a',
          800: '#614072',
          900: '#50365d',
        },
        mystic: {
          900: '#1a1625',
          800: '#2d1b3d',
          700: '#3d2955',
          600: '#4d3968',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite alternate',
        'cosmic-rotate': 'cosmic-rotate 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'slide-in': 'slideIn 1.2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
        'cosmic-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-50%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(ellipse at top, #1a1625 0%, #2d1b3d 50%, #3d2955 100%)',
        'sacred-pattern': 'radial-gradient(circle at 50% 50%, rgba(160, 118, 188, 0.1) 0%, transparent 50%)',
      }
    },
  },
  plugins: [],
}