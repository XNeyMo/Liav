/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome': "url('/src/assets/images/clothes.png')",
      }
    },
    colors: {
      'white': '#EDEDED',
      'gray': '#797979',
      'black': '#1F2029',

      'old-copper-50': '#F7F5EF',
      'old-copper-100': '#EBE5D6',
      'old-copper-200': '#D9CCAF',
      'old-copper-300': '#C3AD81',
      'old-copper-400': '#B1915E',
      'old-copper-500': '#A27F50',
      'old-copper-600': '#8B6743',
      'old-copper-700': '#704F38',
      'old-copper-800': '#5F4334',
      'old-copper-900': '#533B30',
      'old-copper-950': '#2F1F19',
    },
  },
  plugins: [],
}

