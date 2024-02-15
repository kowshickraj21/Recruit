/** @type {import('tailwindcss').Config} */

 module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'secondry':'var(--color-secondry)',
        'grey':'var(--color-grey)',
        'innerText':'var(--color-innerText)',
        'gigText':'var(--color-gigText)',
      },
    },

  },
  plugins: [],  
}

