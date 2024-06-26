/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'customeGradientOne' : 'linear-gradient(to bottom Left, #25D366 , #fde047 )',
        'whatsappBg' : "url('/src/assets/whatsapp-icon(96).png')"
      },
      borderRadius : {
        'customOne' : '50px 50px 0 0 / 50px 50px 100px 100px'
      }
    },
  },
  plugins: [],
}

