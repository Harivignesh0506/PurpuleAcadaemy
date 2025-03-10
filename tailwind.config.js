/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '4.125': '4.125rem', // Add the custom line-height value
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        code: ['Source Code Pro', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        screens: {
          'no-text-adjust': { raw: '(-webkit-text-size-adjust: 100%)' },
        },
        code: ['Source Code Pro', 'sans-serif'], // Custom font class
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'homeimg': "url(https://thepurpleacademy.in/images/homeBannerBg.png)",
      },

      
    },
  },
  plugins: [],
}