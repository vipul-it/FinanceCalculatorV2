// tailwind.config.js
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    //  "/src/component/Common.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Thin: ['Roboto-Thin'],
        ExtraLight: ['Roboto-ExtraLight'],
        Light: ['Roboto-Light'],
        Normal: ['Roboto-Regular'],
        Medium: ['Roboto-Medium'],
        SemiBold: ['Roboto-SemiBold'],
        Bold: ['Roboto-Bold'],
        ExtraBold: ['Roboto-ExtraBold'],
        Black: ['Roboto-Black'],
      },
      colors: {
        primary: '#879DFF',
        primaryDark: '#1F3CFE',
        secondary: '#CBCBCB',
        customWhite: '#FFFFFF',
        selectionGreen: '#DEE2FF',
        PrimaryHeading: '#3343AE',
        
      },
    },
  },
  plugins: [],
};