/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Add TypeScript files here
  ],
  theme: {
    extend: {
      colors:{
        primary: '#e3e8eb',
        secondary : '#c8d1d9',
        red : '#FF0000'
      }
    },
    
  },
  
  plugins: [],
}
