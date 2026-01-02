import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#6C63FF',
        'accent-teal': '#025DFF',
        'dark-gray': '#2D3748',
        'light-gray': '#F7FAFC',
        'gray-light': '#A0AEC0',
        'gray-medium': '#718096',
        'custom-bg': 'rgb(22, 23, 26)', // From body background
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Arial', 'sans-serif'],
        heading: ['var(--font-anton)', 'sans-serif'],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '48px',
        'xl': '72px',
      },
      keyframes: {
        'orbit-rotate-1': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit-rotate-2': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'counter-rotate-ccw-1': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'counter-rotate-cw-2': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'orbit-rotate-1': 'orbit-rotate-1 20s linear infinite',
        'orbit-rotate-2': 'orbit-rotate-2 25s linear infinite',
        'counter-rotate-ccw-1': 'counter-rotate-ccw-1 20s linear infinite',
        'counter-rotate-cw-2': 'counter-rotate-cw-2 25s linear infinite',
        'bounce-gentle': 'bounce-gentle 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
