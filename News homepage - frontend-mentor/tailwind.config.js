/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // Primary

        "Soft-orange" : "hsl(35, 77%, 62%)",
        "Soft-red": "hsl(5, 85%, 63%)",

        // Neutral

        "Off-white": "hsl(36, 100%, 99%)",
        "Grayish-blue": "hsl(233, 8%, 79%)",
        "Dark-grayish-blue": "hsl(236, 13%, 42%)",
        "Very-dark-blue": "hsl(240, 100%, 5%)"

      },
      fontFamily:{
        Inter: ['Inter']
      },

      backgroundImage: {
        "open-menu" : "url('./assets/images/icon-menu.svg')",
        "close-menu": "url('./assets/images/icon-menu-close.svg')"
        
      },
      screens:{
        mobile: "390px"
      }
    },
  },
  plugins: [],
}

