/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#113959',
        'primary-dark': '#0d2540',
        'primary-light': '#1a4d7a',
        background: '#FFFFFF',
        'neutral-50': '#f9fafb',
        'neutral-100': '#f3f4f6',
        'neutral-200': '#e5e7eb',
        'neutral-300': '#d1d5db',
        'neutral-400': '#9ca3af',
        'neutral-500': '#6b7280',
        'neutral-600': '#4b5563',
        'neutral-700': '#374151',
        'neutral-800': '#1f2937',
        'neutral-900': '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        slideInBadge: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideInBadge: 'slideInBadge 0.6s ease-out',
        fadeIn: 'fadeIn 0.3s ease-in',
        slideUp: 'slideUp 0.4s ease-out',
      },
    },
  },
  plugins: [],
};
