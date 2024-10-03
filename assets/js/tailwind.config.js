/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{html,js}',
    ],
    theme: {
        extend: {
          backgroundColor: {
            'custom-blue': '#F0A8D0',
          }
        }
      }
  }