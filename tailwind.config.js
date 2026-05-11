/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'workshop-white': '#F4F5F7',
        'tool-steel': '#4A5568',
        'bay-charcoal': '#1A202C',
        'torque-blue': '#2B6CB0',
        'torque-blue-light': '#3182CE',
        'torque-blue-dark': '#2C5282',
        'surface-elevated': '#FFFFFF',
        'surface-muted': '#E2E8F0',
        'text-primary': '#1A202C',
        'text-secondary': '#4A5568',
        'text-muted': '#718096',
        'border-subtle': '#E2E8F0',
        'border-medium': '#CBD5E0',
      },
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.03em',
        'tight': '-0.02em',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};