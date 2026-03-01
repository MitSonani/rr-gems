/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors here for a more premium look
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        skin: '#FAE9DF',
        "neutrals3-nutral": "var(--neutrals3-nutral)",
        "neutrals6-stroke": "var(--neutrals6-stroke)",
        orange: "var(--orange)",
      },
      fontFamily: {
        // Brand fonts
        display: ['"Very Vogue Display"', 'serif'],
        sans: ['"Very Vogue Text"', 'Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        "body-16-m": "var(--body-16-m-font-family)",
        "body-16-SM": "var(--body-16-SM-font-family)",
        "body-18-m": "var(--body-18-m-font-family)",
      }
    },
  },
  plugins: [],
}
