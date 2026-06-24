/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eru: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#3b82f6',
          600: '#2c3e8f',
          700: '#1e3a8a',
          800: '#1e3a8a',
          900: '#172554',
          gold: '#d4af37',
          orange: '#f59e0b',
          cyan: '#06b6d4',
          header: '#1e3a8a',
          light: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 4px rgba(0, 0, 0, 0.06)',
        'header': '0 2px 12px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'geometric': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAxMDBMMTAwIDBIMjBMMCAyMHoiIGZpbGw9IiNkNGRkZmIiIGZpbGwtb3BhY2l0eT0iMC41Ii8+PC9zdmc+')",
      }
    },
  },
  plugins: [],
}
