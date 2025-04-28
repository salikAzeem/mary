/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fe',
          100: '#dfe6fd',
          200: '#c7d3fc',
          300: '#a8b9f8',
          400: '#8295f3',
          500: '#6370ed',
          600: '#4c51e2',
          700: '#3f3ecb',
          800: '#3535a5',
          900: '#303384',
          950: '#1c1c4a',
        },
        secondary: {
          50: '#f1f7fe',
          100: '#dcecfd',
          200: '#c1dcfb',
          300: '#94c4f8',
          400: '#64a6f1',
          500: '#3d88ea',
          600: '#2b6cdb',
          700: '#2259c7',
          800: '#2048a3',
          900: '#1e3e81',
          950: '#172654',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffeed5',
          200: '#fddaab',
          300: '#fbbe74',
          400: '#f89d3c',
          500: '#f67a13',
          600: '#e7590a',
          700: '#be4109',
          800: '#983310',
          900: '#7b2c11',
          950: '#421307',
        },
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};