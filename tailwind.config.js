/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        redColor: '#FFD6A5',
        yellowColor: '#FDFFB6',
        purpleColor: '#BDB2FF',
        blueColor: '#A0C4FF',
        bgColor:'#17191C',

        blackColor: '#292E33',
        whiteColor: '#F8F9FA',

        lightGreyColor: '#DEE2E6',
        mediumGreyColor: '#6C757D',

        primary: '#CAFFBF',

        accent: '#343A40'
      }
    }
  },
  plugins: []
}
