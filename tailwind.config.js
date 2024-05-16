/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: 'hsl(233, 47%, 7%)',
        darkBlue: 'hsl(244, 38%, 16%)',
        softViolet: 'hsl(277, 64%, 61%)',
        white: 'hsl(0, 0%, 100%)',
        transWhite1: 'hsla(0, 0%, 100%, 0.75)',
        transWhite2: 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'desktop-image': "url('../images/image-header-desktop.jpg')",
        'mobile-image': "url('../images/image-header-mobile.jpg')",
     },
    },
  },
  plugins: [],
}

