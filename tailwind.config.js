/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans'], //for my text
        mont: ['Montserrat', 'sans-serif'],  //for my headings
        poppins:['Poppins','sans'], //for my logo
      },
      colors: {
       'primary': '#fff',    //for text 
        'secondary': '#2095AE',  // for background
        'tertiary': '#0F2454', //for call to action or my buttons
       
      },
    },
  },
  plugins: [
    
  ],
}