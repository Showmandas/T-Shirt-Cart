/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#c071e8",
        
"secondary": "#b9e552",
        
"accent": "#6bace5",
        
"neutral": "#2C313A",
        
"base-100": "#FAFAFA",
        
"info": "#849EE7",
        
"success": "#4AE38F",
        
"warning": "#DFB211",
        
"error": "#EB7E6B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

