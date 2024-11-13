/** @type {import('tailwindcss').Config} */
module.exports= {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  important: true,
  theme: {
      extend: {
        colors:{
          'primary': '#212174',
          'primaryColor': '#212174',
          'background':'#fbf7f3'
        },
      },
      fontFamily: {
        poppinsRegular: ["poppinsRegular"],
        poppinsMedium: ["poppinsMedium"],
        poppinsSemiBold: ["poppinsSemiBold"],
        poppinsBlack: ["poppinsBlack"],
        poppinsBold: ["poppinsBold"],
      },
  },
  plugins: [
    /**
       * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
       * for forms. If you don't like it or have own styling for forms,
       * comment the line below to disable '@tailwindcss/forms'.
       */
    require('@tailwindcss/forms'),
  ],
}