/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A3E635',
          50: '#F3FBDE',
          100: '#E7F7BD',
          200: '#D0EF7C',
          300: '#B9E73B',
          400: '#A3E635',
          500: '#8ACB1B',
          600: '#6B9E15',
          700: '#4C710F',
          800: '#2D4409',
          900: '#0E1703',
          950: '#000000'
        },
        secondary: {
          DEFAULT: '#C5B3F9',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#EDE7FD',
          400: '#D9CDFC',
          500: '#C5B3F9',
          600: '#9F82F5',
          700: '#7851F1',
          800: '#5220ED',
          900: '#3D0FC4',
          950: '#330DA3'
        },
        neutral: {
          white: '#FFFFFF',
          background: '#F5F5F5',
          text: '#1F2937'
        }
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false // Disable Tailwind's reset to prevent conflicts with Ant Design
  }
}