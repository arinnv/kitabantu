 /** @type {import('tailwindcss').Config} */
 export default {
     content: ["./*.{html,js}"],
     theme: {
         extend: {
             fontFamily: {
                 openSans: ["Open Sans", "sans-serif"],
                 inter: ["Inter", "sans-serif"],
             },
             colors: {
                 "pink-kb": "#FE9AA0",
             },
         },
     },
     plugins: [],
 }